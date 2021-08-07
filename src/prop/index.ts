import { CSSProperties } from 'vue';
import { useProp } from './prop';

export const define = (() =>
  class DefineProp {
    static get string() {
      return useProp<string>(String);
    }

    static get number() {
      return useProp<number>(Number);
    }

    static get bigint() {
      return useProp<bigint>(BigInt);
    }

    static get stringNumber() {
      return useProp<number | string>([Number, String]);
    }

    static get boolean() {
      return useProp<boolean>(Boolean);
    }

    static get symbol() {
      return useProp<symbol>(Symbol);
    }

    static get date() {
      return useProp<Date>(Date);
    }

    static get vueNode() {
      return useProp<JSX.Element | string | null>([String, Object]);
    }

    static get css() {
      return useProp<CSSProperties>(Object);
    }

    static object<T = Record<any, unknown>>() {
      return useProp<T>(Object);
    }

    static array<T = Record<any, unknown>>() {
      return useProp<Array<T>>(Array);
    }

    static func<T = () => void>() {
      return useProp<T>(Function);
    }
  })();