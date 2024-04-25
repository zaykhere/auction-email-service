import AWS from "aws-sdk";

const ses = new AWS.SES({region: 'eu-west-1'});

async function sendMail(event, context) {
  const params = {
    Source: 'auction-service@axioutech.com',
    Destination: {
      ToAddresses: ['auction-service@axioutech.com'],
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello from Auction Service!',
        },
      },
      Subject: {
        Data: 'Test Mail',
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;