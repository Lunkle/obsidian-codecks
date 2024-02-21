import { requestUrl } from 'obsidian';
// import { RequestUrlParam } from 'obsidian';

export interface RequestUrlParam {
  /** @public */
  url: string;
  /** @public */
  method?: string;
  /** @public */
  contentType?: string;
  /** @public */
  body?: string | ArrayBuffer;
  /** @public */
  headers?: Record<string, string>;
}

export function createCard() {
  const raw = JSON.stringify({
    "assigneeId": null,
    "content": "My card content",
    "putOnHand": false,
    "deckId": "6252b46e-d03a-11ee-b559-434e60090b74",
    "milestoneId": null,
    "masterTags": [],
    "attachments": [],
    "effort": 12,
    "priority": "b",
    "childCards": [],
    "userId": "Lunkle"
  });
  
  const requestUrlParams: RequestUrlParam = {
    url: "https://api.codecks.io/dispatch/cards/create",
    method: "POST",
    contentType: "application/json",
    body: raw,
    headers: {
      "X-Auth-Token": "PCveadxj6kYaOfipr9DLoCGL",
      "X-Account": "virtual-cardboard",
      "Content-Type": "application/json"
    }
  };

  requestUrl(requestUrlParams);
}
