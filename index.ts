import {
  Tracer as OpenTracer,
  SpanOptions,
  Span as OpenSpan,
  SpanContext as OpenSpanContext
} from "opentracing";

class SpanContext extends OpenSpanContext {
  spanId: string;
}

class Span extends OpenSpan {
  __context: SpanContext;

  context(): SpanContext {
    return this.__context;
  }

  constructor() {
    super();
    this.__context = new SpanContext();
  }
}

class Tracer extends OpenTracer {
  startSpan(operationName: string, options: SpanOptions = {}): Span {
    let parent: SpanContext;

    // results in error:
    // Property 'spanId' does not exist on type '() => SpanContext'
    parent = (options.childOf as Span).context.spanId;

    return new Span();
  }
}
