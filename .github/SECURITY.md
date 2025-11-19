# 🔒 Security Policy

## 🛡️ Our Security Commitment

We take the security of **BarcodeGenerator** seriously. This document outlines our security practices, supported versions, and how to report security vulnerabilities responsibly.

## 📋 Supported Versions

We actively maintain security updates for the following versions:

| Version | Supported          | Status | End of Life |
| ------- | ------------------ | ------ | ----------- |
| **2.1.x** | ✅ **Current**     | 🟢 Active | TBD |
| **2.0.x** | ✅ **LTS**         | 🟡 Security Only | December 2025 |
| < 2.0   | ❌ **Unsupported** | 🔴 EOL | June 2024 |

### 📝 Version Support Notes
- **Current (2.1.x)**: Full feature updates and security patches
- **LTS (2.0.x)**: Critical security patches only until EOL
- **Unsupported (< 2.0)**: No security updates - please upgrade immediately

## 🚨 Reporting a Vulnerability

**Found a security issue?** We appreciate your responsible disclosure! 🙏

### 📧 **How to Report**
1. **Email**: Send details to **security@[domain]** (replace with actual email)
2. **Subject**: `[SECURITY] BarcodeGenerator vulnerability report`
3. **Include**: Detailed description, reproduction steps, and impact assessment

### ⚡ **Response Timeline**
- **Initial Response**: Within **24-48 hours**
- **Status Updates**: Every **3-5 business days**
- **Resolution**: **30-90 days** depending on severity

### 🔍 **What to Include**
- 📝 **Description**: Clear explanation of the vulnerability
- 🔄 **Reproduction Steps**: How to reproduce the issue
- 💥 **Impact**: Potential security implications
- 🌐 **Environment**: .NET version, OS, library version
- 📋 **PoC Code**: Minimal proof-of-concept (if applicable)

### 🎯 **Severity Classification**

We use the following severity levels to prioritize security issues:

| Severity | Description | Response Time |
|----------|-------------|---------------|
| 🔴 **Critical** | Remote code execution, privilege escalation | 24-48 hours |
| 🟠 **High** | Data exposure, authentication bypass | 3-5 days |
| 🟡 **Medium** | Information disclosure, DoS attacks | 1-2 weeks |
| 🟢 **Low** | Minor security improvements | 2-4 weeks |

### ✅ **What Happens Next**

1. **🔍 Investigation**: We'll investigate and validate the report
2. **📋 Assessment**: Determine severity and impact scope  
3. **🔧 Fix Development**: Create and test security patches
4. **📢 Disclosure**: Coordinate responsible disclosure timeline
5. **🎉 Recognition**: Credit reporter in security advisory (if desired)

## 🔐 Security Best Practices

### 🏗️ **For Developers Using BarcodeGenerator**

- ✅ **Always validate input** before passing to barcode encoding
- ✅ **Sanitize file paths** when using export templating features
- ✅ **Keep dependencies updated** including SkiaSharp
- ✅ **Use latest stable version** for security patches
- ❌ **Never trust user input** for file paths or options

### 🛠️ **For Contributors**

- 🔍 **Run security scans** before submitting PRs
- 📋 **Follow secure coding** guidelines in our contributing docs
- 🧪 **Test edge cases** that could lead to security issues
- 📝 **Document security implications** of new features

## 🛡️ Dependencies Security

We actively monitor our dependencies for security vulnerabilities:

- **SkiaSharp**: Core graphics library - monitored via GitHub security advisories
- **System.Memory/Buffers**: Framework compatibility - follows Microsoft security updates
- **PolySharp**: Build-time only dependency - minimal runtime impact

## 📊 Security Disclosure Policy

### 🕒 **Timeline**
- **Day 0**: Vulnerability reported
- **Day 1-2**: Initial triage and acknowledgment
- **Day 3-30**: Investigation and fix development
- **Day 30-90**: Testing, review, and coordinated disclosure
- **Post-fix**: Public advisory and CVE assignment (if applicable)

### 📢 **Public Disclosure**
- **Security advisories** published on GitHub Security tab
- **Release notes** include security fix details
- **CVE assignment** for significant vulnerabilities
- **Credit given** to reporters (unless requested otherwise)

## 🆘 **Need Help?**

- **General Security Questions**: Create a [GitHub Discussion](https://github.com/TyKonKet/BarcodeGenerator/discussions)
- **Non-Security Bugs**: Use our [Issue Tracker](https://github.com/TyKonKet/BarcodeGenerator/issues)
- **Security Concerns**: Email security@[domain] directly

---

## 💙 Thank You

We appreciate the security research community's efforts to help keep **BarcodeGenerator** and its users safe. Responsible disclosure helps us protect our users while giving us time to develop and test proper fixes.

**Together, we can build a more secure ecosystem!** 🌟

---

*Last updated: August 2025*
