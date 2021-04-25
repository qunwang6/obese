declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}
declare module "*.svg" {
  export const ReactComponent: React.FunctionComponent<
    React.SVGAttributes<SVGElement>
  >;
}
