# Opioid Prevention App
This React application uses AWS services DynamoDB, Lambda, APIGateway, and S3 to provide information about opioid overdoses and how to prevent them using Naloxone. Users can fill out a form to have Naloxone in the form of a Narcan nasal spray kit delivered to them. They also have the option to receive text notifications about the status of their order. It is currently being hosted at the following link: http://opioid-demo.s3-website-us-west-2.amazonaws.com

## CloudFormation Template
The .yaml template found in the **cloudformation** directory can be used to build the tech stack used in this project. Uploading the file to AWS CloudFormation as a new stack will create the following resources: 
* S3 bucket enabled for website hosting
* DynamoDB table with streams enabled 
* APIGateway API with 3 endpoints
    * GET
    * POST
    * PUT
* 4 Lambda functions 
    * **lambdaGetFunction** is triggered by the GET endpoint in the API and returns all entries in the DynamoDB table
    * **lambdaPostFunction** is triggered by the POST endpoint in the API and adds a new order entry to the DynamoDB table
    * **lambdaPutFunction** is triggered by PUT endpoint in the API and updates the shipment information associated with a given order
    * **lambdaSNSFunction** is triggered by DynamoDB streams and sends an SMS message to the phone number associated with the entry being added or updated in the DynamoDB table 

Once the stack is created and code from this repository is downloaded, the API endpoints in the code can be replaced with the endpoints created by the template. The command `npm run` will run the project using the resources created by CloudFormation. 