declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      SECRET_JWT_TOKEN: string;
      SECRET_COOKIE_TOKEN: string;
    }
  }
}

export {}
