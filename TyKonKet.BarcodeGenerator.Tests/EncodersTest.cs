using System.Collections.Generic;
using TyKonKet.BarcodeGenerator.Encoders;
using Xunit;

namespace TyKonKet.BarcodeGenerator.Tests
{
    public class EncodersTest
    {
        [Fact]
        public void EanCheckDigit()
        {
            Assert.All(new Dictionary<string, string>
            {
                // Random
                {"978123456789", "7" },
                {"9036101", "2" },
                {"978020137964", "8" },
                {"9092306", "7" },
                {"273420131962", "0" },
                {"273420781962", "9" },
                {"9092218", "3" },
                {"978156216789", "9" },
                {"978156216162", "0" },
                // All kind of result with 12 chars
                {"978323456773", "0" },
                {"978323455773", "1" },
                {"979303455773", "2" },
                {"979303455073", "3" },
                {"660303455071", "4" },
                {"660141452071", "5" },
                {"470141452080", "6" },
                {"660141452080", "7" },
                {"660141452070", "8" },
                {"460141452080", "9" },
                // All kind of result with 7 chars
                {"6461524", "0" },
                {"4128314", "1" },
                {"6461520", "2" },
                {"6491520", "3" },
                {"9037324", "4" },
                {"4123324", "5" },
                {"6491529", "6" },
                {"4628304", "7" },
                {"4628394", "8" },
                {"4628384", "9" },
            }, io => { Assert.Equal(io.Value, EanEncoder._checkDigit(io.Key)); });
        }

        [Fact]
        public void Ean8Validate()
        {
            Assert.All(new Dictionary<string, string>
            {
                {"28384", "00283847" },
                {"9036101", "90361012" },
                {"90361012", "90361012" },
                {"90361012456", "90361012" }
            }, io => { Assert.Equal(io.Value, EanEncoder._validate(io.Key, 8)); });
        }

        [Fact]
        public void Ean13Validate()
        {
            Assert.All(new Dictionary<string, string>
            {
                {"9781234567897", "9781234567897" },
                {"978123456789", "9781234567897" },
                {"123456789", "0001234567895" },
                {"9781234567897532", "9781234567897" }
            }, io => { Assert.Equal(io.Value, EanEncoder._validate(io.Key, 13)); });
        }

        [Fact]
        public void Iasb13Validate()
        {
            Assert.All(new Dictionary<string, string>
            {
                {"9781234567897", "978123456789" },
                {"978123456789", "978123456789" },
                {"123456789", "978123456789" },
                {"9781234567897532", "978123456789" },
                {"34567897532", "978345678975" },
                {"567894567897532", "978567894567" }
            }, io => { Assert.Equal(io.Value, Isbn13Encoder._isbnValidate(io.Key)); });
        }

        [Fact]
        public void UpcaValidate()
        {
            Assert.All(new Dictionary<string, string>
            {
                {"978123456786", "978123456786" },
                {"97812345678", "978123456786" },
                {"12345678", "000123456784" },
                {"97812345678975", "978123456786" }
            }, io => { Assert.Equal(io.Value, EanEncoder._validate(io.Key, 12)); });
        }
    }
}
