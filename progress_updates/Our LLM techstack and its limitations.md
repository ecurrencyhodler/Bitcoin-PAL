For our hackathon, we chose to build our LLM on private-gpt instance and [GPT4ALL](https://github.com/nomic-ai/gpt4all). However we ran into some limitations.

When we initially prompted our LLM, responses it gave included non-bitcoin related topics. For example when we first asked the LLM about BIP-39, it returned information about a "business intelligence platform" which was definitely off the mark.

![](https://imagedelivery.net/wyrwp3c-j0gDDUWgnE7lig/ebbfdec0-73ee-4796-cb22-944371afa500/public)

We looked into potentially disconnecting PrivateGPT from its general knowledge base but unfortunately we didn't find a way to do that. So we created an "on topic" filter instead as a work around. It worked pretty well as you can see in our tests [here.](https://bolt.fun/story/round-2-of-training-our-llm--931) The photo below depicts the initial key words we allowed.

![](https://imagedelivery.net/wyrwp3c-j0gDDUWgnE7lig/37796764-9b3c-49ce-d97a-7d8a5a03bf00/public)

It's not the best solution but it works for the purposes of our hackathon. Future considerations might be to consider llama2 as suggested by Starbuilder.

![](https://imagedelivery.net/wyrwp3c-j0gDDUWgnE7lig/40557c4e-d07f-4224-4955-d74a64e8f400/public)
