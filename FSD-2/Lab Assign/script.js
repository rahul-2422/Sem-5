var data=["Agartala","Aizawl","342","Aizawl","Imphal","400","Amaravathi","Bangalore","663","Amaravathi","Chennai","448","Amaravathi","Bhubaneswar","819","Amaravathi","Raipur","758","Bangalore","Panaji","578","Bangalore","Chennai","333","Bangalore","Thiruvanathapuram","730","Bangalore","Mumbai","980","Bhopal","Gandhinagar","599","Bhubaneswar","Raipur","544","Bhubaneswar","Ranchi","455","Bhubaneswar","Kolkata","441","Chandigarh","Lucknow","742","Chandigarh","Jaipur","528","Chennai","Thiruvanathapuram","771","Dehradun","Lucknow","552","Dispur","Shillong","91","Dispur","Imphal","482","Dispur","Aizawl","462","Dispur","Agartala","536","Dispur","Itanagar","323","Dispur","Kohima","350","Hyderabad","Amaravati","271","Hyderabad","Bangalore","569","Hyderabad","Raipur","783","Hyderabad","Mumbai","719","Imphal","Kohima","136","Jaipur","Gandhinagar","634","Jaipur","Bhopal","598","Kohima","Itanagar","323","Kolkata","Ranchi","395","Kolkata","Patna","583","Kolkata","Gangtok","675","Kolkata","Dispur","1035","Lucknow","Jaipur","574","Lucknow","Bhopal","615","Lucknow","Ranchi","710","Lucknow","Patna","539","Mumbai","Panaji","542","Mumbai","Gandhinagar","553","Mumbai","Bhopal","776","Patna","Ranchi","327","Raipur","Mumbai","1091","Raipur","Bhopal","614","Raipur","Lucknow","810","Raipur","Ranchi","580","Shimla","Chandigarh","113","Shimla","Dehradun","227","Shimla","Lucknow","841","Srinagar","Shimla","620","Srinagar","Chandigarh","562"];
var ptr=0;
function route(){
var source=document.getElementById("source").value;
var destination=document.getElementById("destination").value;
fun_route(source,source,destination,-1);
}
function fun_route(str,src,desc,i){
    console.log(" ");
  while(true){
      i=data.indexOf(src, i+1);
      console.log(i);
      if((i+1)%3==1){
        if(data[i+1]==desc&&ptr==0){
          str=str+ "\n" + cities[i+1];
        document.getElementById("route").innerHTML = str;
          ptr=1;
          return;
        }
        else{
            fun_route(str+ "\n" + data[i+1] ,data[i+1],desc,i);
        }
      }
      if(i==-1){
        break;
      }
  }
}