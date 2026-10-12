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

int main() {
    return 0;
}
