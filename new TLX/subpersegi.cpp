#include <bits/stdc++.h>

using namespace std;

int main (){
    int a, b, c;
    b = 0;

    cin >> a;
    for (int d = a; d >= 1; d--){
        c = d*d;
        b += c;
    }
    cout << b;
}