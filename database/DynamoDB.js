// import React, { useEffect, useState } from "react"
// import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb"
// import { DynamoDBDocumentClient, PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb"
// import { v4 as uuidv4 } from "uuid"
// // import aws_credentials from "./credentials.js"
// import aws_credentials from "./local.js"




// export async function getServerSideProps() {
//   const client = new DynamoDBClient({
//     region: aws_credentials[2],
//     credentials: {
//       accessKeyId: aws_credentials[0],
//       secretAccessKey: aws_credentials[1]
//     },
//   })
  
//   const dynamo = DynamoDBDocumentClient.from(client);

//   try {
//     const data = await dynamo.send(new ScanCommand({ TableName: aws_credentials[3] }))
//     console.log(data.Items)
//     return { props: {item: data.Items} }
//   } catch (err) {
//     console.error("Error retrieving items:", err)
//     return { props: {item: null} }
//   }
// }


// export default function DynamoDB(props, {item}) {

//   const [Items, setItems] = React.useState(null)

//   // const client = new DynamoDBClient({
//   //   region: aws_credentials[2],
//   //   credentials: {
//   //     accessKeyId: aws_credentials[0],
//   //     secretAccessKey: aws_credentials[1]
//   //   },
//   // })
    
//   // const dynamo = DynamoDBDocumentClient.from(client);
  

//   // useEffect(() => {
//   //   props.GetData ? retrieve_all() : null
//   // }, [props.GetData])

//   useEffect(() => {
//     item ? setItems(item) : null
//   }, [item])


//   useEffect(() => {
//     Items ? props.setAllManagerDB(Items) : null
//   }, [Items])


//   // useEffect(() => {
//   //   const rows = generateRandomData()

//   //   for(let i=0; i<rows.length; i++){
//   //     insert_all(rows[i])
//   //   }
//   // }, [])
  
//   const firstNames = [
//     'Aaron', 'Abigail', 'Aiden', 'Alice', 'Amelia',
//     'Benjamin', 'Blake', 'Brianna', 'Brody', 'Caleb',
//     'Camila', 'Carson', 'Charlotte', 'Chloe', 'Daniel',
//     'David', 'Delilah', 'Dylan', 'Eleanor', 'Elijah',
//     'Elizabeth', 'Ella', 'Emily', 'Emma', 'Ethan',
//     'Gabriel', 'Grace', 'Grayson', 'Hannah', 'Harper',
//     'Isabella', 'Isla', 'Jack', 'Jackson', 'Jacob',
//     'James', 'Jayden', 'Joseph', 'Liam', 'Logan',
//     'Lucas', 'Mason', 'Mateo', 'Mia', 'Noah',
//     'Oliver', 'Olivia', 'Sophia', 'William', 'Zoe'
//   ];

//   const lastNames = [
//     'Adams', 'Anderson', 'Bailey', 'Bell', 'Bennett',
//     'Brown', 'Campbell', 'Carter', 'Clark', 'Collins',
//     'Cook', 'Cooper', 'Cox', 'Davis', 'Diaz',
//     'Edwards', 'Evans', 'Flores', 'Foster', 'Garcia',
//     'Gonzalez', 'Gray', 'Green', 'Hall', 'Harris',
//     'Hayes', 'Hernandez', 'Hill', 'Howard', 'Hughes',
//     'Jackson', 'James', 'Jenkins', 'Johnson', 'Jones',
//     'Kelly', 'King', 'Lee', 'Lewis', 'Long',
//     'Martinez', 'Miller', 'Mitchell', 'Moore', 'Morgan',
//     'Morris', 'Murphy', 'Nelson', 'Parker', 'Perez'
//   ];
  
//   const states = [
//     'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
//     'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia'
//   ];

//   function randomFrom(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
//   }
  
//   function randomName() {
//     return `${randomFrom(firstNames)} ${randomFrom(lastNames)}`;
//   }
  
//   function randomEmail(name) {
//     const domains = ['example.com', 'work.net', 'gov.org', 'company.io'];
//     return name.toLowerCase().replace(/ /g, '.') + '@' + randomFrom(domains);
//   }
  
//   function generateRandomData() {
//     const rows = [];
  
//     for(let i=0; i<15; i++){
//     const deputy_name = randomName();
//     const deputy_email = randomEmail(deputy_name);
  
//     for (let p = 0; p < 4; p++) {
//       const prin_name = randomName();
//       const prin_email = randomEmail(prin_name);
//       const prin_unit = 'Unit-' + Math.floor(Math.random() * 100);
//       const prin_efis = String(Math.floor(Math.random() * 9000) + 1000);
  
//       for (let c = 0; c < 4; c++) {
//         const chief_name = randomName();
//         const chief_email = randomEmail(chief_name);
//         const chief_unit = 'Unit-' + Math.floor(Math.random() * 100);
//         const chief_efis = String(Math.floor(Math.random() * 9000) + 1000);
  
//         for (let s = 0; s < 12; s++) {
//           const ste_name = randomName();
//           const ste_email = randomEmail(ste_name);
//           const ste_unit = 'Unit-' + Math.floor(Math.random() * 100);
//           const ste_efis = String(Math.floor(Math.random() * 9000) + 1000);
  
//           const emp_name = randomName();
//           const emp_email = randomEmail(emp_name);
  
//           rows.push({
//             id: uuidv4(),
//             region: String(Math.floor(Math.random() * 90) + 10),
//             district: randomFrom(states),
//             tram: String(Math.floor(Math.random() * 900) + 100),
//             efis: String(Math.floor(Math.random() * 9000) + 1000),
//             deputy_name,
//             deputy_email,
//             prin_unit,
//             prin_efis,
//             prin_name,
//             prin_email,
//             chief_unit,
//             chief_efis,
//             chief_name,
//             chief_email,
//             ste_unit,
//             ste_efis,
//             ste_name,
//             ste_email,
//             supervisor_name: randomName(),
//             emp_role: 'Engineer',
//             emp_name,
//             emp_email,
//             emp_district: randomFrom(states),
//             emp_efis: String(Math.floor(Math.random() * 9000) + 1000),
//             emp_tram: String(Math.floor(Math.random() * 900) + 100),
//           });
//         }
//       }
//     }
//   }
  
//     return rows;
//   }

//   // const generateRandomData = (numRows = 100) => {
//   //   return Array.from({ length: numRows }, generateRandomData)
//   // }


//   async function retrieve_all(){
//       try {
//         const data = await dynamo.send(new ScanCommand({ TableName: Table }))
//         setItems(data.Items || [])
//       } catch (err) {
//         console.error("Error retrieving items:", err)
//       }
//   }

  
//   async function insert(data){
//     try {
//       await dynamo.send(new PutCommand({
//         TableName: Table,
//         Item: data,
//       }))
//     } catch (err) {
//       console.error("Error adding item:", err)
//     }
//   }


//   async function insert_all(data) {
//     const keys = [
//       "id", "region", "district", "tram", "efis", "deputy_name", "deputy_email",
//       "prin_unit", "prin_efis", "prin_name", "prin_email",
//       "chief_unit", "chief_efis", "chief_name", "chief_email",
//       "ste_unit", "ste_efis", "ste_name", "ste_email",
//       "supervisor_name", "emp_role", "emp_name", "emp_email",
//       "emp_district", "emp_efis", "emp_tram"
//     ]
  
//     const item = {}
  
//     for (const key of keys) {
//       item[key] = { S: data[key] ?? "" }
//     }

//     console.log("item")
//     console.log(item)
  
//     const command = new PutItemCommand({
//       TableName: "manager_db",
//       Item: item,
//     })
  
//     try {
//       await client.send(command);
//       console.log("✅ Full item inserted with all fields.");
//     } catch (err) {
//       console.error("❌ Failed to insert item:", err);
//     }
//   }
  
//   return (
//       null
//   )
// }

   
import React, { useEffect, useState } from "react";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from "uuid";
import aws_credentials from "./local.js";

// // Server-side function to fetch data
// export async function getServerSideProps() {
//   const client = new DynamoDBClient({
//     region: aws_credentials[2],
//     credentials: {
//       accessKeyId: aws_credentials[0],
//       secretAccessKey: aws_credentials[1],
//     },
//   });

//   const dynamo = DynamoDBDocumentClient.from(client);

//   try {
//     const data = await dynamo.send(new ScanCommand({ TableName: aws_credentials[3] }));
//     console.log(data.Items)
//     return {
//       props: { items: data.Items || [] },
//     };
//   } catch (err) {
//     console.error("Error retrieving items:", err);
//     return {
//       props: { items: [] },
//     };
//   }
// }

// Main React component
export default function DynamoDB({ items }) {
  const [fetchedItems, setFetchedItems] = useState(null);

  // Initialize the state when the data is passed from getServerSideProps
  useEffect(() => {
    if (items) {
      setFetchedItems(items);
    }
  }, [items]);

  // If you want to trigger actions or pass items to a parent component, do so here
  useEffect(() => {
    if (fetchedItems) {
      // Example: update parent component with the fetched data
      // props.setAllManagerDB(fetchedItems); // Uncomment if you need to use it.
    }
  }, [fetchedItems]);


  async function insert(data) {
    const client = new DynamoDBClient({
      region: aws_credentials[2],
      credentials: {
        accessKeyId: aws_credentials[0],
        secretAccessKey: aws_credentials[1],
      },
    });

    const dynamo = DynamoDBDocumentClient.from(client);
    
    try {
      await dynamo.send(
        new PutItemCommand({
          TableName: aws_credentials[3],
          Item: data,
        })
      );
      console.log("✅ Item inserted successfully.");
    } catch (err) {
      console.error("❌ Failed to insert item:", err);
    }
  }

  return (
    null
  );
}
