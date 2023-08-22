# ai & 人工智能

## ai 应用场景

- 以文生小说
- 以文生图
- 以文生视频
- 以文搜索图，按内容搜索，clip
- 以文搜索答案，ai文档库，https://www.danswer.ai/
- 翻译


## 深度学习翻译模型

对于一些常见的机器翻译任务，存在一些免费的预训练模型可供使用。这些模型通常是由研究机构或社区开发，并在一些公开数据集上进行了训练。您可以通过下载这些模型并加载到您的代码中来进行中文翻译。

以下是一些常用的免费预训练模型：

1. **Hugging Face Transformers**: Hugging Face提供了一个名为Transformers的开源库，其中包含了大量的预训练模型，包括用于机器翻译的模型。您可以使用`transformers`库来访问这些模型，并根据您的需求进行中文翻译。

   示例代码：
   ```python
   from transformers import MarianMTModel, MarianTokenizer

   model_name = 'Helsinki-NLP/opus-mt-zh-en'
   model = MarianMTModel.from_pretrained(model_name)
   tokenizer = MarianTokenizer.from_pretrained(model_name)

   text = '你好'
   inputs = tokenizer.encode(text, return_tensors='pt')
   outputs = model.generate(inputs)
   translated_text = tokenizer.decode(outputs[0], skip_special_tokens=True)
   print(translated_text)
   ```

2. **OpenNMT Pretrained Models**: OpenNMT官方提供了一些预训练的模型，覆盖了不同语言对的翻译。您可以在OpenNMT的GitHub页面上找到这些模型，并将其加载到您的代码中。

   示例代码：
   ```python
   import torch
   from onmt.translate import Translator
   from onmt.utils.misc import load_checkpoint

   checkpoint_path = '<MODEL_CHECKPOINT_PATH>'
   checkpoint = torch.load(checkpoint_path, map_location=torch.device('cpu'))
   model_opt = checkpoint['opt']
   model = load_checkpoint(checkpoint, model_opt)
   translator = Translator(model, model_opt)

   src_text = ['你好']
   _, pred, _ = translator.translate(src_text)
   print(pred[0])
   ```

这些模型可以为您提供免费的中文翻译功能，但请注意，它们可能在特定任务或数据集上的性能和质量有所不同。您可以根据您的具体需求选择适合的模型，并在使用之前查阅相应模型的文档和示例代码以获取更多详细信息。