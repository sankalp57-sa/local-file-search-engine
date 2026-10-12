#include <iostream>
#include <filesystem>
#include <vector>
#include <fstream>
#include <string>
#include <chrono> 
#include <ctime>  
#include "json.hpp"

using namespace std;
namespace fs = filesystem;
using json = nlohmann::json;

struct SearchResult {
    string name;
    string path;
    string date;
};

vector<SearchResult> results;

string escapePath(const string& input) {
    string output = input;
    for (char& c : output) {
        if (c == '\\') c = '/';
    }
    return output;
}

string getFileTime(const fs::directory_entry& entry) {
    try {
        auto ftime = fs::last_write_time(entry);
        auto sctp = std::chrono::time_point_cast<std::chrono::system_clock::duration>(ftime - fs::file_time_type::clock::now() + std::chrono::system_clock::now());
        std::time_t cftime = std::chrono::system_clock::to_time_t(sctp);
        
        char buffer[26];
        #ifdef _WIN32
            ctime_s(buffer, 26, &cftime);
        #else
            string timeStr = ctime(&cftime);
            return timeStr.substr(0, timeStr.length() - 1);
        #endif
        
        string timeStr(buffer);
        if (!timeStr.empty() && timeStr.back() == '\n') timeStr.pop_back();
        return timeStr;
    } catch (...) {
        return "Unknown Date";
    }
}

int main() {
    return 0;
}
