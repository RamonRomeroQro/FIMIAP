{"filter":false,"title":"dwd.c","tooltip":"/dwd.c","undoManager":{"mark":8,"position":8,"stack":[[{"start":{"row":0,"column":0},"end":{"row":89,"column":1},"action":"insert","lines":["#include <stdio.h>","#include <string.h>","#include <stdlib.h>","","#define true 1","#define false 0","","int min(int a,int b)","{","\tif(a > b)","\t\treturn b;","\treturn a;","}","","//check whether Pk is suffix of Pq","int suffix(char *pattern,int k,int q,char ch)","{","\tint i;","\tif(pattern[k-1] != ch)","\t\treturn false;","\tfor(i = 0;i < k-1;i++)","\t\tif(pattern[i] != pattern[q-k+i+1])","\t\t\treturn false;","\treturn true;","}","","/*"," * construct our FA"," */","void compute_transition_function(char *pattern,int *array,int numchars)","{","\tint m = strlen(pattern);","\tint q;","\t","\tfor(q = 0; q <= m; q++)","\t{","\t\tint chars;","\t\tfor(chars = 0; chars < numchars; chars++)","\t\t{","\t\t\tint k = min(m,q+1);","\t\t\twhile(k)","\t\t\t{","\t\t\t\tchar ch = 'a'+chars;","\t\t\t\tif(suffix(pattern,k,q,ch))","\t\t\t\t\tbreak;","\t\t\t\tk--;","\t\t\t}","\t\t\tarray[q*numchars+chars] = k;","\t\t}","\t}","}","","int FA_match(char *text,int *array,int numchars,int receive)","{","\tint n = strlen(text);","\tint q = 0;","\tint i;","\tfor(i = 0;i < n;i++)","\t{","\t\tint index = numchars*q+text[i]-97;    ","\t\tq = array[index]; ","\t\tif(q == receive)","\t\t\treturn i+1-receive;","\t}","\treturn -1;","}","","int main()","{","\tchar *text = \"abababacaba\";","\tchar *pattern = \"ababaca\";","\tint length = strlen(pattern);","\tint *array = (int*)malloc(3*(length+1));","\t","\tcompute_transition_function(pattern,array,3);","\t","\tint i;","\tprintf(\"This is our chart\\n\");","\tfor(i = 0;i <= length; i++)","\t{","\t\tint j;","\t\tfor(j = 0; j < 3; j++)","\t\t\tprintf(\"%d  \",array[i*3+j]);","\t\tprintf(\"\\n\");","\t}","\tint offset = FA_match(text,array,3,length);","\tprintf(\"offset is %d\\n\",offset);","\tfree(array);","\treturn 0;","}"],"id":1}],[{"start":{"row":87,"column":0},"end":{"row":88,"column":0},"action":"remove","lines":["\tfree(array);",""],"id":8}],[{"start":{"row":69,"column":15},"end":{"row":69,"column":26},"action":"remove","lines":["abababacaba"],"id":9},{"start":{"row":69,"column":15},"end":{"row":69,"column":16},"action":"insert","lines":["a"]}],[{"start":{"row":69,"column":16},"end":{"row":69,"column":17},"action":"insert","lines":["a"],"id":10}],[{"start":{"row":69,"column":17},"end":{"row":69,"column":18},"action":"insert","lines":["a"],"id":11}],[{"start":{"row":69,"column":18},"end":{"row":69,"column":19},"action":"insert","lines":["a"],"id":12}],[{"start":{"row":70,"column":18},"end":{"row":70,"column":25},"action":"remove","lines":["ababaca"],"id":13},{"start":{"row":70,"column":18},"end":{"row":70,"column":19},"action":"insert","lines":["a"]}],[{"start":{"row":70,"column":19},"end":{"row":70,"column":20},"action":"insert","lines":["a"],"id":14}],[{"start":{"row":0,"column":0},"end":{"row":88,"column":1},"action":"remove","lines":["#include <stdio.h>","#include <string.h>","#include <stdlib.h>","","#define true 1","#define false 0","","int min(int a,int b)","{","\tif(a > b)","\t\treturn b;","\treturn a;","}","","//check whether Pk is suffix of Pq","int suffix(char *pattern,int k,int q,char ch)","{","\tint i;","\tif(pattern[k-1] != ch)","\t\treturn false;","\tfor(i = 0;i < k-1;i++)","\t\tif(pattern[i] != pattern[q-k+i+1])","\t\t\treturn false;","\treturn true;","}","","/*"," * construct our FA"," */","void compute_transition_function(char *pattern,int *array,int numchars)","{","\tint m = strlen(pattern);","\tint q;","\t","\tfor(q = 0; q <= m; q++)","\t{","\t\tint chars;","\t\tfor(chars = 0; chars < numchars; chars++)","\t\t{","\t\t\tint k = min(m,q+1);","\t\t\twhile(k)","\t\t\t{","\t\t\t\tchar ch = 'a'+chars;","\t\t\t\tif(suffix(pattern,k,q,ch))","\t\t\t\t\tbreak;","\t\t\t\tk--;","\t\t\t}","\t\t\tarray[q*numchars+chars] = k;","\t\t}","\t}","}","","int FA_match(char *text,int *array,int numchars,int receive)","{","\tint n = strlen(text);","\tint q = 0;","\tint i;","\tfor(i = 0;i < n;i++)","\t{","\t\tint index = numchars*q+text[i]-97;    ","\t\tq = array[index]; ","\t\tif(q == receive)","\t\t\treturn i+1-receive;","\t}","\treturn -1;","}","","int main()","{","\tchar *text = \"aaaa\";","\tchar *pattern = \"aa\";","\tint length = strlen(pattern);","\tint *array = (int*)malloc(3*(length+1));","\t","\tcompute_transition_function(pattern,array,3);","\t","\tint i;","\tprintf(\"This is our chart\\n\");","\tfor(i = 0;i <= length; i++)","\t{","\t\tint j;","\t\tfor(j = 0; j < 3; j++)","\t\t\tprintf(\"%d  \",array[i*3+j]);","\t\tprintf(\"\\n\");","\t}","\tint offset = FA_match(text,array,3,length);","\tprintf(\"offset is %d\\n\",offset);","\treturn 0;","}"],"id":15},{"start":{"row":0,"column":0},"end":{"row":38,"column":19},"action":"insert","lines":["import unittest","","","def compute_transition_function(p, s):","    m = len(p)","    d = {}","    for q in range(m + 1):","        for a in s:","            k = min(m + 1, q + 2)","            while k > 0:","                k -= 1","                if p[:k] == (p[:q] + a)[-k:]:","                    break","            d[(q, a)] = k","    return d","","","class ProblemTestCase(unittest.TestCase):","","    def print_sorted(self, x, s):","        x = sorted(list(map(lambda (k, v): (k, v), x.items())))","        l = len(s)","        output = ''","        for i in xrange(len(x)):","            if i % l == 0:","                print(output)","                output = str(i / l)","            output += ' ' + str(x[i][1])","        print(output)","","    def test_case(self):","        s = 'ab'","        self.print_sorted(compute_transition_function('aabab', s), s)","        self.print_sorted(compute_transition_function('ababbabbababbababbabb',","                                                      s), s)","","","if __name__ == '__main__':","    unittest.main()"]}]]},"ace":{"folds":[],"scrolltop":100.5,"scrollleft":0,"selection":{"start":{"row":15,"column":0},"end":{"row":15,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":5,"state":"start","mode":"ace/mode/c_cpp"}},"timestamp":1486361422865,"hash":"84af9130c6348d81a9322ca70560bb00395b43e1"}