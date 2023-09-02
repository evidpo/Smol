```typescript
export interface User {
  uid: string;
  email: string;
  displayName: string;
}

export interface ExcelData {
  [key: string]: string | number | boolean;
}

export interface XmlData {
  [key: string]: string | number | boolean;
}
```