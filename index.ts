import {
  Tracer as OpenTracer,
  SpanOptions,
  Span,
  SpanContext as OpenSpanContext
} from "opentracing";

class SpanContext extends OpenSpanContext {
  spanId: string;
}

class Tracer extends OpenTracer {
  startSpan(operationName: string, options: SpanOptions = {}): Span {
    let parent: SpanContext;

    parent = (options.childOf as Span).context.spanId;

    return new Span();
  }
}
