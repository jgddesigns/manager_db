import type { NextPage } from 'next'
import Head from 'next/head'
import ManagerDBTable from '../components/ManagerDBTable'
import Favicon from 'react-favicon'
import React, { useEffect, useState } from "react";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";
import aws_credentials from "../database/credentials.js";


export async function getServerSideProps() {
  try{
    const client = new DynamoDBClient({
      region: aws_credentials[2],
      credentials: {
        accessKeyId: aws_credentials[0],
        secretAccessKey: aws_credentials[1],
      },
    });

    const dynamo = DynamoDBDocumentClient.from(client);

    const data = await dynamo.send(new ScanCommand({ TableName: aws_credentials[3] }));

    return {
      props: { items: data.Items || [] },
    };
  } catch (err) {
    console.error("Error retrieving items:", err);
    return {
      props: { items: [] },
    };
  }
}

const Home: NextPage = (items) => {
  
  return (
    <div className="flex">
      <Head>
        <title>Database Modifier</title>
        <Favicon url="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <ManagerDBTable Items={JSON.stringify(items)} />
    </div>
  )
}

export default Home
