> fittrack-backend@1.0.0 prebuild
> rimraf dist


> fittrack-backend@1.0.0 build
> nest build


> fittrack-frontend@1.0.0 build
> next build && next export

   Linting and checking validity of types  ...Failed to compile.

./services/s3Service.ts:1:10
Type error: Module '"@aws-amplify/storage"' has no exported member 'put'.

> 1 | import { put, get, remove } from '@aws-amplify/storage';
    |          ^
  2 |
  3 | export const S3Service = {
  4 |   async uploadFile(file: File, fileName: string): Promise<{ key: string; url: string }> {