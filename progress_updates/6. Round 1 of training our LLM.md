Our resident AI hacker Ron spent some time figuring out tools for us to leverage for our project. He landed on a private-gpt instance and [GPT4ALL](https://github.com/nomic-ai/gpt4all).

He tested training the LLM locally on his computer and used the topic of BIP-39 as a test. Although the test wasn't perfect, the results were promising.

First we tested the LLM when it had 0 knowledge of bip-39 and the response we got we got involved a summary of a business intelligence platform:

![](https://imagedelivery.net/wyrwp3c-j0gDDUWgnE7lig/533c52e5-aa5b-4aec-a917-187bd1982d00/public)

Ron then fed it information about BIP-39:

![](https://imagedelivery.net/wyrwp3c-j0gDDUWgnE7lig/90b05794-8a3e-4e2b-082e-bc9aef5f7500/public)

Finally, he prompted the LLM again about BIP-39 and it worked!

![](https://imagedelivery.net/wyrwp3c-j0gDDUWgnE7lig/ea8a3be9-6cff-4f83-4d67-a326ca63b000/public)

We were impressed that this worked with only 1 data submission. "GPT vanilla would've failed this" - Ron

Next we've got to figure out how to encourage the LLM not to respond with non-bitcoin related topics. Then we've got to create a websocket listener to receive and return the response.

Mood of our team right now:

![](https://imagedelivery.net/wyrwp3c-j0gDDUWgnE7lig/25dd774b-b48e-4589-8c22-f1dcc9736000/public)
