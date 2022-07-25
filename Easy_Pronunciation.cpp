#include <bits/stdc++.h>
using namespace std;
#define pb push_back 
#define int long long
#define mkp make_pair
#define all(x) (x).begin(), (x).end()
#define nline '\n'
#define mac(i,x,y) for(int i=(int)x; i<y; i++)
#define speed() ios_base::sync_with_stdio(false),cin.tie(NULL),cout.tie(NULL);

int32_t main()
{
    speed()
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        string s;
        cin>>s;
        int flag=0;
        for(int i=0;i<n-3;i++)
        {
            int cnt=0;
            for(int j=i;j<i+4;j++)
            {
                if(s[j]!='a'&&s[j]!='e'&&s[j]!='i'&&s[j]!='o'&&s[j]!='u')
                {
                    cnt++;


                }
            }
            if(cnt==4)
            flag=1;
            if(flag)
            break;

        }
        cout<<(flag==0 ? "YES" : "NO" )<<nline;
    }



















    return 0;
}