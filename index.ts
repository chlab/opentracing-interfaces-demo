import {
  Tracer as OpenTracer,
  SpanOptions,
  Span,
  SpanContext
} from "opentracing";

interface ISpanOptions extends SpanOptions {
  followsFrom?: Span | SpanContext;
}

class Tracer extends OpenTracer {
  startSpan(operationName: string, options: ISpanOptions = {}) {}
}
