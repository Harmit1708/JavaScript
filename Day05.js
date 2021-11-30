1.	Do the below programs in anonymous function & IIFE
    •	Print odd numbers in an array
        let result = [];
        let odd = function(arr){
         for(i=0;i<arr.length;i++){
        if(arr[i]%2==1){
           result.push(arr[i])
           }
         }
         console.log(result);

        }
        odd(arr=[1,2,3,4,5,6,7,8,9,10]);

    •	Convert all the strings to title caps in a string array
        let result = [];
        let caps = function(arr){
            for(i=0;i<arr.length;i++){
                result.push(arr[i].toUpperCase());
            }
            console.log(result);

        }
        caps(arr=["harmit","sonani"]);

    •	Sum of all numbers in an array
        let result = [];
        let sum1 = 0 ;
        let sum = function(arr){
            for(i=0;i<arr.length;i++){
                  sum1 += arr[i];  
            }
            var a = sum1
            result.push(a)
          console.log(result);
        }
        sum(arr=[1,2,3,4,5]);

    •	Return all the prime numbers in an array
        Let result = [];
        var k=0;
        let prime = function(arr)
        {
            for(i=0;i<arr.length;i++)
            {
                if(arr[i]===1)
                {
                    continue;
                }
                else if(arr[i]===2)
                {
                    k=1;
                    result.push(arr[i]);
                    // console.log(arr[i]);
                }
                k=0;
                for(j=2;j<i;j++)
                {
                // console.log("a")
                    if(arr[i]%j===0)
                    {
                        k=1;
                        break;
                    }
                }
                if(k===0 && arr[i]!=2)
                {
                    result.push(arr[i])
                    // console.log(arr[i]);
                }
            }
            if(k==1){
                console.log(result)
            }
        };
        prime(arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);



    •	Return all the palindromes in an array
        let flag = 0;
        let palindrome = function(number){
            const len = Number.length;
            for(i=0;i<len/2;i++){
                if(Number[i]!==Number[len - 1 -i]){
                    flag=1;
                    break;
                }
            }
            if(flag ==1)
            {
                return "not a palindrome";
            }
            else{
                return Number;
            }
        }
        console.log(palindrome(Number = [1,3,5,3,1]));

    •	Return median of two sorted arrays of same size
        let median  =  function(a,b){
            let merge = [...a, ...b].sort((a, b) => a - b);
            for(i=0;i<merge.length/2|0;i++){
                if(merge.length%2){
                    return merge[i];
                }
            }
            return (merge[i]+merge[i-1])/2;
        }
        const arr = [1, 12, 15, 26, 38,45];
        const arr1 = [2, 13, 17, 30, 45, 47];
        console.log(median(arr,arr1));

    •	Remove duplicates from an array
        var result = [];
        let duplicate = function(arr)
        {
        for(i=0;i<arr.length;i++)
        {
        if(arr[i]==arr[i+1])
        {
        continue;
        }
        else
        {
        result.push(arr[i]);
        }
        }
        console.log(result);
        }
        duplicate(arr=[1,1,2,3,4,5,6,7,8,9,9,10,11,11,11,11,12,13,14,15,16,17,18,19,20,20])

    •	Rotate an array by k times
        var j=0;
        var result = [];
        let rotate = function(a,n,k)
        {
            for(i=0;i<n;i++){
                if(i<k){
                    j=1
                    result.push(array[n + i -k]);
                }
                else
                {
                    result.push(array[i-k]);
                }
            }
            if(j==1){
                console.log(result)
            }
            else
            {
                console.log(result);
            }

        }
        let array = [1,2,3,4,5];
        let n = array.length;
        let k=0;
        rotate(array,n,k);

2.	Do the below programs in arrow functions
    a.	Print odd numbers in an array
        var result = [];
        let odd =  (a) =>
        {
                for(i=0;i<arr.length;i++)
                {
                    if(arr[i]%2==1)
        {
                          result.push(arr[i])
                         }
               }
                console.log(result);
        }
        odd(arr=[1,2,3,4,5,6,7,8,9,10]);



    b.	Convert all the strings to title caps in a string array

        let result = [];
        let caps = (arr) =>
        {
            for(i=0;i<arr.length;i++)
            {
                      result.push(arr[i].toUpperCase());
         }
            console.log(result);
        }
        caps(arr=["harmit","sonani"]);



    c.	Sum of all numbers in an array
        let result = [];
        let sum1 = 0 ;
        let sum = (arr) =>{
            for(i=0;i<arr.length;i++){
                  sum1 += arr[i];  
            }
            var a = sum1
            result.push(a)
          console.log(result);
        }
        sum(arr=[1,2,3,4,5]);

    d.	Return all the prime numbers in an array
        result = [];
        var k=0;
        let prime = (arr) =>
        {
              for(i=0;i<arr.length;i++)
              {
                    If(arr[i]===1)
                  {
                        continue;
                        }	
                        else if(arr[i]===2)
                  {
                        k=1;
                        result.push(arr[i]);
                         }
                  k=0;
                  for(j=2;j<i;j++)
                  {
                    if(arr[i]%j===0)
                        {
                              k=1;
                            break;
                        }
                  }
                  If(k===0 && arr[i]!=2)
                {
                        result.push(arr[i])
                     }
            }
            if(k==1){
                return result
            }
        };
        console.log(prime(arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));

    e.	Return all the palindromes in an array
        let flag = 0;
        let palindrome = (num) => 
        {
            const len = Num.length;
              for(i=0;i<len/2;i++)
        {
                    if(Num[i]!==Num[len - 1 -i])
        {
                          flag=1;
                          break;
                    }
              }
              if(flag ==1)
              {
                    return "not a palindrome";
              }
              else
        {
                    return Num;
              }
        }
        console.log(palindrome(Num = [1,3,5,3,1]));


