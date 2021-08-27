
import { S3Client, GetObjectCommand, GetObjectCommandInput } from "@aws-sdk/client-s3"

export async function readValue(key: string, bucket: string = "my-bucket") {
    console.log(`reading value for ${key} in ${bucket}`)
    const client = new S3Client({ region: "us-west-2" });
    const params: GetObjectCommandInput = {
        Bucket: bucket, Key: key
    }
    const command = new GetObjectCommand(params)
    try {
        const data = await client.send(command)
        // process data.
        console.log("successfully fetched data")
        console.log(data)
    } catch (error) {
        // error handling.
        console.log("failed to fetch data")
        console.error(error)
    } finally {
        // finally.
        console.info('finished')
    }
}