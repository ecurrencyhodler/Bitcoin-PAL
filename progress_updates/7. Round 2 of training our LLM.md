Ron, our resident LLM expert, continued training our AI last night. 🧠

Our first [attempt](https://bolt.fun/story/round-1-of-training-our-llm--925) was prompting the LLM based off of one data submission. He then moved on to prompting the LLM based off of multiple sources and it worked really well!

![](https://imagedelivery.net/wyrwp3c-j0gDDUWgnE7lig/5b7e9747-93f7-4862-18da-d92f24e56100/public)

Ron also threw up a quick react frontend and tested connecting the LLM to a front end. He hosted it on localhost:8000 to see if a json query and return a json payload with question, answer, sources, and quotes would work. Thankfully it did.

![](https://imagedelivery.net/wyrwp3c-j0gDDUWgnE7lig/97bba226-96ac-4b48-30ff-cf50569ccb00/public)

![](https://imagedelivery.net/wyrwp3c-j0gDDUWgnE7lig/aca6df0f-c7a8-4c6f-7488-1b60f4d62f00/public)

Next Steps
==========

1.  It's pretty exciting to see all the elements coming together. Next our front end dev will need to wire up their design and plug in the LLM.
    
2.  FWIW, the initial source data for our LLM will be hosted in github and includes BIPS, some RFCs, Bitcoin wiki general info, and the white paper for now. Other sources we may consider are bitcoin optechs topics([https://bitcoinops.org/en/topics/)](https://bitcoinops.org/en/topics/)) and [bitcoin.org](//bitcoin.org)'s vocabulary ([https://bitcoin.org/en/vocabulary).](https://bitcoin.org/en/vocabulary).)
    
3.  We will also need to figure out if we can include the filter criteria of scoring data against the initial data set plus data source into the equation. We plan on hashing this out tomorrow on our call.
