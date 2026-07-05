What is prompt engineering :-

-prompt engineering is the practice of designing and refining the onstructions(called prompts)given  to an AI model to get better , more accurate and usefil outpu.

What is LLM :-

-LLM stands for large language model.
-it is an AI model trained for massive amount of text data to ->

  1.understand language 
  2.predict the next word in a sentence 
  3.generate meaningful responce

  ex- google keyboard,chatgpt,gemini,claude

Role of llm in prompt engineering :-

-prompt engineering-> how to talk
-LLM->who you're talking to

LLM's helps us to ->

  1.read our prompt
  2.interprete our internet
  3.generate a good responce based on our prompt.
  4.write a good prompt

  MODULE 1->Introduction to LLM and prompting basics=

  Descriminative AI->
  -it is a AI tecnique that helps us to classfy the data .
  -ex.
    1.Email- is spam & not spam
    @.Face ID(face recognisation)
    3.Netflix recomendation etc... 
        
  Generative AI->
  -in generativ AI it not only classyfy the data but it generate the new datathrough AI.
  -ex.
    1.chatgpt
    2.Midjourney(image generation)
    Github copilot(code generation) etc..

    features    des.AI              Generative AI
    main role    clasification      creation
    prompt.eng    dont't have       play a vital role to genarte
                  any role          data based on our prompt

Evolution of ->RNN,LSTM & transformer

1.RNN (Recurrent Neural Network)

 -An RNN is the type of neural network design to process sequential data like...
    -text
    -speech
    -time series etc...
 - it process the data step by step.
 - it e=remember previouus information using hidden state in RNN.

 previous inforamtion ->RNN->new informaton.
 
 Ex. sentence-> "i love AI"
 RNN reads it - "i" -> then "love" -> then "AI"
 (like keepimg memory of orevious word)
 
 The pronlem/disadvantages are ->
 1. it can not remember a long sentence because of short memory.
 2.struggle with reading long sntence .

2.LSTM(Long short-term  memory):-

-it stands for long short-termmemory.
- it is an improved version of RNN.

How LSTM works->
-LSTM uses some gates to control information.
   -forget gate -> removes the useless dat
   -input gate ->adds new dat/info.
   -output gate ->decides what the output

-basically it acts like a smart memory system.

Advantages ->
  -it solve RNN'smemory  problesm
  -works well for 
     -language translation
     -speech recohgnition
     -time-series prediction

3.Transformer->

-Transformer is MODERN AI architecture that powee LLM's (like chatgpt).

How it works->
 -it uses self-attention some mechanism .
 -(it allows to understand out context , relation between words in a sequence)
 -looks at all the words at once , not step by step.
   ex.
   -"the animal didn't cross the road because it was tired"
     
   -in this ex., the transformer understand "it" refers to animal using attention mechanism.

Advantsges->
 1.handle long sentence/context very well.
 2-Faster(processing is very first)
 3-give mor accurate o/p than RNN/LSTM
 
 Features              RNN           LSTM              Transformer
 data processing     sequential     sequential          parallel
 memory              short            long              very long
 speed                slow            slow               fast
 performance          basic           better             best 

 Prompt Engineering->

 - by the help of transformer we do the prompt engineering in a better way .

   1.long context : transformer helps to memorise the long context given in the prompt.(it works on parallel data processing)

   2.context understanding : if we can put same word in different form then transformeralso understand that word prperly.

   ex.
     1.bank (River bank,financial bank)

 -AI don't read our words , it reads tokens 
 -we can't take 1 token as a 1 word , although "unbelievable" word can segrigate to different token.

 ex.
 -word: "playing"-> play is a toekn and ing is a token(play+ing)
 -words:"transforamation->(trans+form+action)

 -AI didn't word directly so we can segrigate diffwrent tokn to form prefix(re-,un-) and suffix (-ing,-ation.-ed) s that AI can recreate some word by recognoze it properly.

Token->

AI Tools                 approx token limit

chatgpt                   ~128,000 to ~256,000 token
                         (depending on version)

gemini                   ~1,000,000 to ~2,000,000 tokens

claud                    ~200,000 token(standard)
                        upto ~1,000,000 token(enterpprize)

perplexity              ~123,000 to ~200,000 tokens

context window of diff LLMs->

  1.chatgpt-> excelent for long discussion, essays,emails,summerizations within it's ~128k - ~256k tokens.

  2.Gemini->processing multiple books ,large size docs. at once, large analysis in one snapshot, complex project tasks across long charts etc..

  3.Claude-> it ideal for large document reasoning / scanning with more safely .

  4.perplexity AI->it uses in various backened model.

Structure prompting->

1.Role(person role)
2.context
3.Task(what action we perform)
4.constraints (negative constraints)
5.output              

-we can take some scenerio for prompting->

use case - 1: writing a content creation 

simple prompt->write a cold email for google internship

engiineering prompt->act as a carrier coach . Write a personalized cold email to a recruiter a google for a data science internship.Mention my proficiency in python and SQL.keep  the tone professional but eager & limit it to 150 words.

use case 2: coding and technical task

simple prompt  -> fix this code (some code)

E.prompt->"act as a senior python developer . review the following code for a long-in logics.identify potential security vulnarabilities and logical errors . provide the corrected code with comments explaining each fix." 

Module 2-> core prompting techniques->

1.Zero shot prompting:"direct order"
- in this prompting we did'n't give any example to AI but we provide a small instruction and we think that by the help of the pre-trained knowledge , AI will provide the answers.

ex.
prompt -> classify the sentiment of this review :
"the battery life of this laptop is amazing but the screen is bit dull".

output->mixed/neutral

2.Few short prompting -> "the pattern maker"

-we faced some problem on zero shot prompting because sometimes it failed but in few shot prompting we have to givesome example to understand the patterm of our prompt then it gives a good resasponse. 

ex.
give the customer feedback in json format .
input/prompt:
example 1-: i love pizza!->{"sentiment":
"positive","label":1}
example 2: the delivery was late ->
{"sentiment","negative","label":0}
example 3:the food was okay->{"s","neutral","label"0.5}

3.chain of thought(COT):the "logical thinker"

-this is the most important tecnique to solve complex problem.If we can put anything in AI , and we give prompt"think step by step"but AI will look in full sentence and create the logic then give the output.so it's a create a little "hallucination/confusion".

-use case -> 
-promt->" a farmer has 15 sheep.All but 8 die.How much are left?lets think step-by-step"

 1.total sheep - 15
 2.all but 8 die means only 8 are left but rest in sheep are die.
 3.so only 8 sheeos are present. 

4. Instruction prompting : framework

-in this prompting wre can put step-by-step instruction .so that it will give the rrequired output.

-person(role):"act as senior oython dev"
-constraints(limit):"don't use external libraries.keep code undrr 20  lines"
-specific instruction:"explain the code like i am 5 years old" 

use case->writting professional email

prompt->"act as a polite HR manager.write a rejection emaol for candidate who cleared the intrerview but we can't hire due to budget cuts.Mention that we  will keep cv for their future . constraints->keep it simple and empathetic , don't mention the exact budget amount". 

MODULE_3 -> advanced prompt engineering frameworks ->

1. ReAct Framework (reason+action)
-ReAct means reason+action+acting.
-before some time AI only think or AI only give the result but now in ReAct framework AI will work on the basis of the loop.like it will think first then give the result then think again wheather it's right oer wrong then again give the result.

use csse -> Reasearching a market trend using AI with browsing capabilities(like chatgpt with search or perplexity)

prompt -> "solve the following task using a thought-action-observation loop.Task:analyze the current stock performance of NVIDIA compared to its competitors in the last 7 days.Instryction: 1. start with a 'thought'(what do we need to find ?)2. perform an action (search for the specific data ) 3. provide an observation(summerize what we find) 3.repeat untilyou can provide a final recomndation for a short-term investor".

2.Three Of Thought(TOT) ->

- it is a more efficient than "chain of thoughts",we can say TOT is a big brother of TOT.
-in "COT" AI can think for  only one line but for "TOT" it can segrigate one line into diferent notes i different branches /nodes as a tree then think it separately.

use case ->
In TOT AI give the strategies are sppose will take ,B & C in these hree branches of a line suppose we will find B will work better than C/A then only cancel C/A only takes B as the reesultant.

ex.

prompt -> "imagine three dufferent experts are brainstorming a solution to this priblem: how can a small local bakery increases it's sales by 50% in 3 monnths witj a budget of only $500 ?"

