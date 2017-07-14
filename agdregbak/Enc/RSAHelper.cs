using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Web;

namespace agdregbak.Enc
{
    public static class RSAHelper
    {
        private static RSACryptoServiceProvider csp = new RSACryptoServiceProvider(2048);
        private static RSAParameters privKey, pubKey;

        static RSAHelper(){

            //lets take a new CSP with a new 2048 bit rsa key pair
           

            //how to get the private key
            privKey = csp.ExportParameters(true);

            //and the public key ...
            pubKey = csp.ExportParameters(false);

            //converting the public key into a string representation
            string pubKeyString;
            {
                //we need some buffer
                var sw = new System.IO.StringWriter();
                //we need a serializer
                var xs = new System.Xml.Serialization.XmlSerializer(typeof(RSAParameters));
                //serialize the key into the stream
                xs.Serialize(sw, pubKey);
                //get the string from the stream
                pubKeyString = sw.ToString();
            }

            //converting it back
            {
                //get a stream from the string
                var sr = new System.IO.StringReader(pubKeyString);
                //we need a deserializer
                var xs = new System.Xml.Serialization.XmlSerializer(typeof(RSAParameters));
                //get the object back from the stream
                pubKey = (RSAParameters)xs.Deserialize(sr);
            }

            //conversion for the private key is no black magic either ... omitted

            //we have a public key ... let's get a new csp and load that key
            csp = new RSACryptoServiceProvider();
            csp.ImportParameters(pubKey);

            


            /*
             * some transmission / storage / retrieval
             * 
             * and we want to decrypt our cypherText
             */

            
        }

        public static string Encrypt(string plaintext)
        {

            //for encryption, always handle bytes...
            var bytesPlainTextData = System.Text.Encoding.Unicode.GetBytes(plaintext);

            //apply pkcs#1.5 padding and encrypt our data 
            var bytesCypherText = csp.Encrypt(bytesPlainTextData, false);

            //we might want a string representation of our cypher text... base64 will do
            var cypherText = Convert.ToBase64String(bytesCypherText);

            return cypherText;
        }

        public static string Decrypt(string cypherText)
        {
            //first, get our bytes back from the base64 string ...
            var bytesCypherText = Convert.FromBase64String(cypherText);

            //we want to decrypt, therefore we need a csp and load our private key
            csp = new RSACryptoServiceProvider();
            csp.ImportParameters(privKey);

            //decrypt and strip pkcs#1.5 padding
            var bytesPlainTextData = csp.Decrypt(bytesCypherText, false);

            //get our original plainText back...
            var plainTextData = System.Text.Encoding.Unicode.GetString(bytesPlainTextData);
            return plainTextData;
        }
     
    }
}