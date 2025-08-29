// middleware/controller-context.middleware.ts
export function controllerContext(name: string) {
    return (req: any, res: any, next: any) => {
      req.controllerName = name;
      next();
    };
  }
  