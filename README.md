## Issue

Since opentracing's `Span.context()` has a return value of opentracing's `Span`, if you extend `SpanContext` with a custom implementation, you will get linting errors because TypeScript expects an opentracing `SpanContext`.

If `Span.context()` had a return value of a `SpanContext` interface, this wouldn't be an issue as far as I can tell.

## Reproduce

Please run:

```
npm i
npm run lint
```

[link to issue](https://github.com/opentracing/opentracing-javascript/issues/128)
