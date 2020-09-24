declare module 'openmath-js' {
  type OMI = { t: 'i'; v: number };
  type OMF = { t: 'f'; v: number };
  type OMSTR = { t: 'st'; v: string };
  type OMB = { t: 'ba'; v: Uint8Array };
  type OMS = { t: 'sy'; n: string; cd: string; uri?: string };
  type OMV = { t: 'v'; n: string };
  type OMA = { t: 'a'; c: Tree[] };
  type OMBIND = { t: 'bi'; s: Tree; v: OMV[]; b: Tree };
  type OMERR = { t: 'e'; s: Tree; c?: Tree[] };
  type TreeValues = number | string | Uint8Array | OMV[];
  type Tree = OMI | OMF | OMSTR | OMB | OMS | OMV | OMA | OMBIND | OMERR;
  type TreeRep = OMNode | Tree;

  export class OMNode {
    static checkJSON(object: Tree): string | null;

    static decode(json: string | Tree): OMNode;

    static integer(value: string | number): OMNode;

    static float(value: number): OMNode;

    static string(value: string): OMNode;

    static bytearray(value: Uint8Array): OMNode;

    static symbol(name: string, cd: string, uri?: string): OMNode;

    static variable(name: string): OMNode;

    static application(...args: TreeRep[]): OMNode;

    static attribution(node: TreeRep, ...attrs: TreeRep[]): OMNode;

    static binding(head: TreeRep, ...rest: TreeRep[]): OMNode;

    static error(head: TreeRep, ...others: TreeRep[]): OMNode;

    static simpleDecode(input: string): OMNode;

    constructor(tree: Tree);

    tree: Tree;

    get parent(): OMNode | undefined;

    get type(): string;

    get value(): TreeValues | undefined;

    get name(): string | undefined;

    get cd(): string | undefined;

    get uri(): string | undefined;

    get symbol(): OMNode | undefined;

    get body(): OMNode | undefined;

    get children(): OMNode[];

    get variables(): OMNode[];

    encode(): string;

    equals(other: OMNode, attributes: boolean): boolean;

    sameObjectAs(other: OMNode): boolean;

    copy(): OMNode;

    simpleEncode(): string;

    findInParent(): string;

    findChild(indexInParent: string): OMNode | undefined;

    address(inThis: OMNode): string[];

    index(address: string[]): OMNode | undefined;

    remove(): void;

    replaceWith(other: OMNode): OMNode;

    getAttribute(keySymbol: OMNode): OMNode;

    removeAttribute(keySymbol: OMNode): void;

    setAttribute(keySymbol: OMNode, newValue: OMNode): OMNode;

    freeVariables(): string[];

    isFree(inThis: OMNode): boolean;

    occursFree(findThis: OMNode): boolean;

    isFreeToReplace(subtreeToReplace: OMNode, inThis: OMNode): boolean;

    replaceFree(original: OMNode, replacement: OMNode, inThis?: OMNode): void;

    childrenSatisfying(filter: (value: OMNode, index: number) => boolean): OMNode[];

    descendantsSatisfying(filter: (value: OMNode, index: number) => boolean): OMNode[];

    hasDescendantSatisfying(filter: (value: OMNode, index: number) => boolean): boolean;
  }
}
