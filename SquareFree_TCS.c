#include <stdio.h>
#include <math.h>
int main()
{
    long int n;
    double sqnum;
    long int i,j=0,flag,chksqr,temp[10000];
  	int count=0,k;
  	printf("Enter the number:");
    scanf("%ld",&n);

    for(i=2;i<=n/2;i++)
    {
        if(n%i==0)
        {
            count++;
            sqnum=sqrt(i);
            chksqr=sqnum;
            if(chksqr==sqnum)
            {
                count--;
                temp[j]=i;
                j++;
            }
            else
            {
                for(k=0;k<j;k++) {
                        if(i>temp[k] && j!=0)
                        {
                        if(i%temp[k]==0)
                        {
                          	count--;
                        	k=j+1;
                        }
                    }
                    else
                        break;
                }
            }
        }
    }

    printf("%d",count);
    return 0;
}
