// declaration.d.ts

declare module "*.module.css" {
  const content: { [className: string]: string }
  export default content
}

declare module "*.svg" {
  const content: string
  export default content
}

declare module "*.png" {
  const content: string
  export default content
}
