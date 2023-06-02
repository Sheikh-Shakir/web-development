#include <bits/stdc++.h>

using namespace std;



/*
 * Complete the 'minimumKeypadClickCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING text as parameter.
 */

int minimumKeypadClickCount(string text) {
 // Write your code here
	int count = 0;
	int prev = 0;
	int curr = 0;
	for(int i = 0; i < text.length(); i++){
		if(text[i] == ' '){
			curr = 0;
		}
		else if(text[i] == 'a' || text[i] == 'b' || text[i] == 'c'){
			curr = 2;
		}
		else if(text[i] == 'd' || text[i] == 'e' || text[i] == 'f'){
			curr = 3;
		}
		else if(text[i] == 'g' || text[i] == 'h' || text[i] == 'i'){
			curr = 4;
		}
		else if(text[i] == 'j' || text[i] == 'k' || text[i] == 'l'){
			curr = 5;
		}
		else if(text[i] == 'm' || text[i] == 'n' || text[i] == 'o'){
			curr = 6;
		}
		else if(text[i] == 'p' || text[i] == 'q' || text[i] == 'r' || text[i] == 's'){
			curr = 7;
		}
		else if(text[i] == 't' || text[i] == 'u' || text[i] == 'v'){
			curr = 8;
		}
		else if(text[i] == 'w' || text[i] == 'x' || text[i] == 'y' || text[i] == 'z'){
			curr = 9;
		}
		if(curr == prev){
			count += 2;
		}
		count += 1;
		prev = curr;
	}
	return count;
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string text;
    getline(cin, text);

    int result = minimumKeypadClickCount(text);

    fout << result << "\n";

    fout.close();

    return 0;
}