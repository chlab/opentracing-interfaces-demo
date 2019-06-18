Please run:

```
npm i
npm run lint
```

You should see:

```
index.ts:13:3 - error TS2416: Property 'startSpan' in type 'Tracer' is not assignable to the same property in base type 'Tracer'.
  Type '(operationName: string, options?: ISpanOptions) => void' is not assignable to type '(name: string, options?: SpanOptions) => Span'.
    Type 'void' is not assignable to type 'Span'.

13   startSpan(operationName: string, options: ISpanOptions = {}) {}
     ~~~~~~~~~


Found 1 error.
```

[link to issue](https://github.com/opentracing/opentracing-javascript/issues/128)
