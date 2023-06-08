import mysql from 'mysql2';
import express, {Request, Response} from 'express';
import { json } from 'body-parser';


const mysqlInfo = {
  host: "192.168.100.77",
  user: "euni",
  password: "0000",
  database: "jamstock",
}

export function signCheck(request:Request, response:Response) {
  
    let body = "";
    
    request.on("data", function (data) {
      body = body + data;
    });
    request.on("end", function () {
      const value = body.split('"')
      console.log('결과: ', value[3])
  
      let conn = mysql.createConnection(mysqlInfo);
      conn.connect();
      conn.query(`select ID from userinfo where ID = '${value[3]}'`,
      (err, data) => {
        if(err) throw(err);
        else{
  
          let result;
          console.log("value 결과: ", data);
  
          if(Array.isArray(data) && data.length === 0){
            result = true;
          }
          else{
            result = false;
          }
  
          response.writeHead(200);
          response.write(JSON.stringify(result));
          response.end();
        }
      })
  
      conn.end();
  
    });
    // res.json(data);

}

export function signResult(request:Request, response:Response) {
  
  let body = '';
  
  request.on("data", function (data) {
    body = body + data;
  });
  request.on("end", function () {
    console.log('회원가입 결과: ', body)
    let bodycarrier = body.split('"');

    let bodySplit = [];
    for (let i = 3; i < bodycarrier.length; i+=4) {
      bodySplit.push(bodycarrier[i]);
    }

    let conn = mysql.createConnection(mysqlInfo);
    conn.connect();
    conn.query(`INSERT INTO userinfo(ID,password,nickname,email,birthday) values ('${bodySplit[0]}', '${bodySplit[1]}', '${bodySplit[2]}', '${bodySplit[4]}', '${bodySplit[3]}')`)
    response.writeHead(200);
    // response.write();
    response.end();

    conn.end();

  });


}
