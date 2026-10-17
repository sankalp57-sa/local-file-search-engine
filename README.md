# ⚡ Local File Search Engine

[![C++17](https://img.shields.io/badge/C%2B%2B-17-blue.svg?logo=c%2B%2B)](https://en.cppreference.com/w/cpp/17)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A blazingly fast local desktop file search engine combining an optimized **C++17** recursive filesystem crawler with a modern, glassmorphic **Web UI**.

---

## 🚀 Key Features

- **⚡ Blazing Fast C++ Scanner**: Recursively crawls nested directories with automated permission-error recovery.
- **🕒 Sub-Millisecond Search**: Client-side filtering benchmarks query execution in fractions of a millisecond.
- **📂 File Metadata**: Displays file modification timestamps, formatted disk paths, and direct clickable links.
- **🎨 Glassmorphic Interface**: Responsive CSS Grid design with sleek hover effects, dark gradients, and responsive layouts.
- **🔄 Zero-Dependency Frontend**: Pure HTML5, CSS3, and JavaScript without external runtime frameworks.

---

## 🏛️ System Architecture

```text
+-----------------------+        Traverse & Index       +-------------------------+
| Local Disk Directory  |  ==========================>  | C++ Scanner (main.exe)  |
+-----------------------+                               +-------------------------+
                                                                     |
                                                                     | Generates JSON
                                                                     v
+-----------------------+        Asynchronous Fetch     +-------------------------+
| Modern Web UI         |  <==========================  |      results.json       |
| (HTML5 / CSS3 / JS)   |                               +-------------------------+
+-----------------------+
```

---

## 🛠️ Getting Started

### 1. Prerequisites
- **C++ Compiler**: GCC (MinGW / g++), Clang, or MSVC supporting C++17.
- **Web Browser**: Chrome, Edge, Firefox, or Safari.
- **HTTP Server**: Python 3 (`python -m http.server`) or Node.js.

### 2. Compile the C++ Scanner
```bash
g++ -std=c++17 -O3 main.cpp -o main.exe
```

### 3. Scan a Directory
Run the compiled executable and enter the path of any target folder:
```cmd
.\main.exe
```
```text
Enter folder path to scan: C:\Users\sankalp\Documents
--------------------------------------
Scan Complete!
Files found: 1542
Time taken: 0.042 seconds
--------------------------------------
```

### 4. Launch the Web UI
Serve the application locally to prevent CORS restrictions on JSON fetch:
```cmd
python -m http.server 8000
```
Open **[http://localhost:8000](http://localhost:8000)** in your browser to search files!

---

## 👨‍💻 Author

**Sankalp**
- GitHub: [@sankalp57-sa](https://github.com/sankalp57-sa)
