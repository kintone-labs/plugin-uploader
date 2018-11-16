"use strict";

import { Lang } from "./lang";

type LangMap = { [lang in Lang]: string };
type MessageMap = { [key in keyof typeof messages]: LangMap };

const messages = {
  "question.domain": {
    en: "Input your Kintone subdomain (example.cybozu.com):",
    ja: "kintoneのドメインを入力してください (example.cybozu.com):"
  },
  "question.username": {
    en: "Input your username:",
    ja: "ログイン名を入力してください:"
  },
  "question.password": {
    en: "Input your password:",
    ja: "パスワードを入力してください:"
  },
  "error.others": {
    en: "An error occured",
    ja: "エラーが発生しました"
  },
  "error.retrying": {
    en: "An error occured, retry with a new browser",
    ja: "エラーが発生しました。リトライします"
  },
  "error.required.zippath": {
    en: "Please specify the path of the Kintone plug-in zip file",
    ja: "kintoneプラグインのzipへのパスを指定してください"
  },
  "error.failed.login": {
    en: "Error: Login failed, please confirm your username and password",
    ja:
      "エラー: kintoneへのログインに失敗しました。ログイン名とパスワードを確認してください"
  },
  "error.invalid.domain": {
    en:
      "Error: Cannot find a login form on the specified page, please confirm the subdomain",
    ja:
      "エラー: 指定されたページにログインフォームが見つかりませんでした。ドメインを確認してください"
  },
  "error.required.admin.privilege": {
    en:
      "Error: Cannot navigate to the plug-ins page, please retry with an account with administrator privileges",
    ja: "エラー: kintone管理者権限のあるユーザーで実行してください"
  },
  "complete.uploading": {
    en: "has been uploaded!",
    ja: "をアップロードしました!"
  }
};

/**
 * Returns a message for the passed lang and key
 * @param lang
 * @param key
 */
export function getMessage(lang: keyof LangMap, key: keyof MessageMap): string {
  return messages[key][lang];
}

/**
 * Returns a function bound lang to getMessage
 * @param lang
 */
export function getBoundMessage(
  lang: keyof LangMap
): (key: keyof MessageMap) => string {
  return getMessage.bind(null, lang);
}
