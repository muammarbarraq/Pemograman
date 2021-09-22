#include <bits/stdc++.h>

using namespace std;

int main (){
    int a, b;
    cin >> a >> b;
    bool white = true;
    for (int i = 0 ; i < a ; i++){
        if(i%2 == 0){
            for (int j = 0;j<b;j++){
            cout << "B";
            }
        } else {
            for (int j=0; j<b; j++){
                cout << "W";
            }
        }
        cout << endl;
    }
    return 0;
}