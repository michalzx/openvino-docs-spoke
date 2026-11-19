---
sidebar_label: "Generative AI workflow"
description: "learn how to use OpenVINO to run generative AI models."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import quickStartPdf from './GenAI_Quick_Start_Guide.pdf';

# Generative AI workflow


Generative AI is a specific area of Deep Learning models used for producing new and “original”
data, based on input in the form of image, sound, or natural language text. Due to their
complexity and size, generative AI pipelines are more difficult to deploy and run efficiently.
OpenVINO™ simplifies the process and ensures high-performance integrations, with the following
options:

<Tabs>
  <TabItem value="openvino-genai" label="OpenVINO™ GenAI">
  - Suggested for production deployment for the supported use cases.  
  - Smaller footprint and fewer dependencies.  
  - More optimization and customization options.  
  - Available in both Python and C++.  
  - A limited set of supported use cases.

  [Install the OpenVINO GenAI package](pathname:///openvino/docs/get-started/install-openvino/install-openvino-genai/)
  and run generative models out of the box. With custom
  API and tokenizers, among other components, it manages the essential tasks such as the
  text generation loop, tokenization, and scheduling, offering ease of use and high
  performance.

  <a href={quickStartPdf}>Check out the OpenVINO GenAI Quick-start Guide [PDF]</a>
  </TabItem>
  <TabItem value="optimum-intel-hugging-face-integration" label="Optimum Intel (Hugging Face integration)">
  - Suggested for prototyping and, if the use case is not covered by OpenVINO GenAI, production.  
  - Bigger footprint and more dependencies.  
  - Limited customization due to Hugging Face dependency.  
  - Not usable for C++ applications.  
  - A very wide range of supported models.

  Using Optimum Intel is a great way to experiment with different models and scenarios,
  thanks to a simple interface for the popular API and infrastructure offered by Hugging Face.
  It also enables weight compression with
  [Neural Network Compression Framework (NNCF)](https://github.com/openvinotoolkit/nncf),
  as well as conversion on the fly. For integration with the final product it may offer
  lower performance, though.
  </TabItem>
  <TabItem value="openvino-model-server" label="OpenVINO™ Model Server">
  - Easy and quick deployment of models to edge or cloud.  
  - Includes endpoints for serving generative AI models.  
  - Available in both Python and C++.  
  - Allows client applications in any programming language that supports REST or gRPC.

  [OpenVINO™ Model Server](pathname:///ovms/docs/overview/)
  provides a set of REST API endpoints dedicated to generative use cases. The endpoints
  simplify writing AI applications, ensure scalability, and provide state-of-the-art
  performance optimizations. They include OpenAI API for:
  [text generation](pathname:///ovms/docs/using-the-models/rest-api-chat/),
  [embeddings](pathname:///ovms/docs/using-the-models/rest-api-embeddings/),
  and [reranking](pathname:///ovms/docs/using-the-models/rest-api-rerank/).
  The model server supports deployments as containers or binary applications on Linux and Windows with CPU or GPU acceleration.
  See the [demos](pathname:///ovms/docs/examples-and-recipes/).
  </TabItem>
</Tabs>

The advantages of using OpenVINO for generative model deployment:

**Fewer dependencies and smaller footprint**  
More compact than frameworks such as Hugging Face and PyTorch, with a smaller binary size
and reduced memory footprint, makes deployments easier and updates more manageable.

**Compression and precision management**  
Techniques such as 8-bit and 4-bit weight compression, including embedding layers, and storage
format reduction. This includes fp16 precision for non-compressed models and int8/int4 for
compressed models, like GPTQ models from [Hugging Face](https://huggingface.co/models).

**Enhanced inference capabilities**  
Advanced features like in-place KV-cache, dynamic quantization, KV-cache quantization and
encapsulation, dynamic beam size configuration, and speculative sampling, and more are
available.

**Stateful model optimization**  
Models from the Hugging Face Transformers are converted into a stateful form, optimizing
inference performance and memory usage in long-running text generation tasks by managing past
KV-cache tensors more efficiently internally. This feature is automatically activated for
many supported models, while unsupported ones remain stateless. Learn more about the
[Stateful models and State API](pathname:///openvino/docs/openvino-workflow/running-inference/inference-request/stateful-models/).

**Optimized LLM inference**  
Includes a Python API for rapid development and C++ for further optimization, offering
better performance than Python-based runtimes.

You can run Generative AI models, using native OpenVINO API, although it is not recommended.
If you want to learn how to do it, refer to
[the 24.6 documentation](https://docs.openvino.ai/2024/learn-openvino/llm_inference_guide/llm-inference-native-ov.html).

Proceed to guides on:

- [OpenVINO GenAI](pathname:///genai/docs/getting-started/introduction/)
- [Hugging Face and Optimum Intel](inference-with-optimum-intel.md)
- [OpenVINO Tokenizers](ov-tokenizers.md)
- [Generative AI with OpenVINO Inference Engine](https://docs.openvino.ai/2024/learn-openvino/llm_inference_guide/llm-inference-native-ov.html)
