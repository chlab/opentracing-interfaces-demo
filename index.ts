import * as ot from "opentracing";

/**
 * Dummy custom implementation
 */

class SpanContext extends ot.SpanContext {
  customField: string;
}

class Span extends ot.Span {
  __context: SpanContext;

  context(): SpanContext {
    return this.__context;
  }

  constructor() {
    super();
    this.__context = new SpanContext();
  }
}

class Tracer extends ot.Tracer {
  startSpan(operationName: string, options: ot.SpanOptions = {}): Span {
    return new Span();
  }

  scope() {
    return "something";
  }
}

/**
 * Dummy client code
 */

ot.initGlobalTracer(new Tracer());
const tracer = ot.globalTracer();

const span = tracer.startSpan("test");
const scope = tracer.scope();
const spanId = span.context().spanId;
