let arr =[15, 105, 60, 95, 2]
let position =3;
let elements=42;
for(i=arr.length-1;i>=position-1;i--){
    arr[i=1]=arr[i];

}
arr[position-1]=elements
console.log(arr);