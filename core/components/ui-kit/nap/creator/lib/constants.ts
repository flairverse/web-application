import { Num } from '@/helpers/number'
import { Str } from '@/helpers/string'
import { Topic } from '@/types/topics'
import * as Lib from '.'

const ICON_COLORS = 'var(--layer-2)'

export const BASE_BOARD_WIDTH = 1288

export const BASE_BOARD_HEIGHT = 722.14

export const MIN_BOARD_WIDTH = 768

export const FRAMES_DATA_ATTRS = {
  ROTATION: 'data-rotation',
  SCALE: 'data-scale',
  TYPE: 'data-type',
  EFFECT: 'data-effect',
}

export const EFFECTS = {
  TEXT: ['no-effect', 'animated-gradient', 'horror', 'shining', 'extreme-offset', 'bingo', 'floor'] as const,
  POST: ['no-effect', 'less-detail', 'no-cover'] as const,
  MENTION: ['no-effect', 'with-background', 'username-name-profile', 'username-name-job', 'username-name-job-followers-subscriptions'] as const,
  QUESTION: ['no-effect', 'no-profile'] as const,
}

export const ICONS: Lib.T.IconsObject = {
  editInnerText: `
    <svg viewBox="0 0 44 45" fill="none">
      <path 
        d="M22.4849 10.1332L34.2898 21.9382L22.4849 10.1332ZM41.1859 8.31182C42.5011 9.62702 42.5212 11.7393 41.1711 13.0894L16.0224 38.2381L2.25 42.1731L6.18498 28.4006L31.3336 3.25198C32.657 1.92857 34.7826 1.90852 36.1112 3.23711L41.1859 8.31182Z"
        stroke="${ICON_COLORS}"
        stroke-width="3"
      />
    </svg>
  `,

  delete: `
    <svg viewBox="0 0 85 89" fill="none">
      <path 
        d="M25.7266 8.30469H24.8438C25.3293 8.30469 25.7266 7.90742 25.7266 7.42188V8.30469H59.2734V7.42188C59.2734 7.90742 59.6707 8.30469 60.1562 8.30469H59.2734V16.25H67.2188V7.42188C67.2188 3.52646 64.0517 0.359375 60.1562 0.359375H24.8438C20.9483 0.359375 17.7812 3.52646 17.7812 7.42188V16.25H25.7266V8.30469ZM81.3438 16.25H3.65625C1.70303 16.25 0.125 17.828 0.125 19.7812V23.3125C0.125 23.798 0.522266 24.1953 1.00781 24.1953H7.67305L10.3987 81.9092C10.5753 85.6722 13.6872 88.6406 17.4502 88.6406H67.5498C71.3238 88.6406 74.4247 85.6832 74.6013 81.9092L77.327 24.1953H83.9922C84.4777 24.1953 84.875 23.798 84.875 23.3125V19.7812C84.875 17.828 83.297 16.25 81.3438 16.25ZM66.7001 80.6953H18.2999L15.6294 24.1953H69.3706L66.7001 80.6953Z"
        fill="${ICON_COLORS}"
      />
    </svg>
  `,

  get editQuestionAndHint() {
    return this.editInnerText
  },
}

export const ITEMS_ICONS = {
  paymentRequired: (topic: Topic) => `
    <svg width="18" viewBox="0 0 87 79" fill="none">
      <path 
        d="M32.5693 56.9932V22.0068C32.5693 17.1875 36.4658 13.25 41.3262 13.25H81.7266V8.88184C81.7266 4.0625 77.8506 0.125 73.0518 0.125H9.86719C5.00684 0.125 0.84375 3.91895 0.84375 8.73828V70.2617C0.84375 75.0811 5.00684 78.875 9.86719 78.875H73.0312C77.8506 78.875 81.7061 74.9375 81.7061 70.1182V65.75H41.3057C36.4658 65.75 32.5693 61.8125 32.5693 56.9932V56.9932Z"
        fill="var(--c-${topic})"
      />
      <path
        d="M41.2441 25.1445V53.8555C41.2441 55.6602 42.7207 57.1367 44.5254 57.1367H82.875C84.6797 57.1367 86.1562 55.6602 86.1562 53.8555V25.1445C86.1562 23.3398 84.6797 21.8633 82.875 21.8633H44.5254C42.7207 21.8633 41.2441 23.3398 41.2441 25.1445ZM57.0557 46.042C53.0977 46.2881 49.8369 43.0273 50.083 39.0693C50.2881 35.8086 52.9336 33.1631 56.2148 32.9375C60.1729 32.6914 63.4336 35.9521 63.1875 39.9102C62.9619 43.1914 60.3164 45.8369 57.0557 46.042Z"
        fill="var(--c-${topic})"
      />
    </svg>
  `,

  blog: `
    <svg width="23" viewBox="0 0 133 119" fill="none">
      <path
        d="M131.749 59.2026C131.749 57.6617 131.169 56.6348 131.169 55.6074V54.58C131.169 53.5529 130.591 52.5257 130.591 51.4984V50.4712C130.591 49.4439 130.012 48.4167 130.012 47.9031L129.433 46.8759C128.854 45.335 128.854 44.3077 128.275 42.7669C117.856 12.4631 103.963 0.136108 79.6513 0.136108C70.9683 0.136108 61.1275 1.67698 48.9715 4.75872C46.6561 5.27234 45.4983 5.78598 44.3406 5.78598L39.7098 7.32685C38.552 7.84046 37.9732 7.84046 36.8155 8.35406H36.2366L32.7634 9.89493L25.8171 12.4631C25.2383 12.9767 24.6594 13.4903 23.5017 13.4903C22.9228 13.4903 22.9228 14.0039 22.344 14.0039L19.4497 16.0584L18.8708 16.5721L16.5554 17.5993L14.8188 19.1401H14.2399L13.6611 19.6538L12.5034 20.681L11.9245 21.1947L11.3456 21.7083L10.7668 22.2219L10.1879 22.7355C9.60904 23.2492 8.45133 24.2764 7.8725 25.3036C7.8725 25.8173 7.29362 25.8173 6.71479 26.3309L6.13591 26.8445C6.13591 27.3582 5.55702 27.8718 5.55702 28.3854C4.39933 29.9262 3.24162 31.4671 2.66275 33.5216C2.66275 34.0352 2.08389 34.5489 2.08389 35.5761C0.926175 37.6306 0.347317 40.1987 0.347317 42.7669C-0.810404 51.4985 0.926175 61.7709 5.55702 75.6387C15.9765 105.943 29.8691 118.27 54.1815 118.27C62.8639 118.27 72.7047 116.729 84.8609 113.647C123.644 102.861 136.958 87.9657 131.749 59.2026ZM38.552 88.4791L37.3943 87.9657L36.8155 87.4522L39.7098 88.4791C39.7098 88.9931 39.1309 88.9931 38.552 88.4791Z"
        fill="transparent"
      />
      <path
        d="M71.9981 37.0178L53.1535 44.6489L36.4082 34.5634L76.997 18.1273L71.9981 37.0178ZM53.4284 41.1643L69.3742 34.7072L72.3734 23.3729L43.3812 35.113L53.4284 41.1643Z" fill="#AE63B9"
        stroke="#AE63B9"
      />
      <path
        d="M89.9955 93.8218L79.7944 97.9529L79.1129 97.5156C77.9781 96.7856 51.2597 79.5241 46.4301 67.6109C41.4431 55.3092 51.6374 42.4661 52.0745 41.9248L52.3281 41.6096L70.4744 34.2615L70.8771 34.3108C71.5667 34.396 87.8302 36.525 92.8173 48.8267C97.6468 60.74 90.4851 91.7209 90.1789 93.0339L89.9955 93.8218ZM80.1291 94.444L87.3089 91.5365C88.3975 86.6159 93.9777 60.0148 89.9183 50.0007C86.0026 40.3416 73.2591 37.8547 70.8793 37.4708L54.2737 44.1949C52.8359 46.1299 45.4248 56.805 49.3293 66.4367C53.3889 76.451 75.9222 91.6678 80.1291 94.444Z"
        fill="#AE63B9"
        stroke="#AE63B9"
      />
      <path
        d="M71.9732 64.0137C67.9765 65.6323 63.4076 63.6991 61.7882 59.7046C60.1692 55.7107 62.1029 51.1443 66.0996 49.5259C70.0963 47.9075 74.6651 49.8405 76.2841 53.8349C77.9036 57.8293 75.9693 62.3957 71.9732 64.0137ZM67.2745 52.4235C64.877 53.3944 63.716 56.1346 64.6877 58.5309C65.6588 60.9271 68.4007 62.0869 70.7982 61.1163C73.1958 60.1452 74.3568 57.4054 73.3851 55.0086C72.414 52.6126 69.6721 51.4525 67.2745 52.4235ZM70.5231 64.6011L73.4227 63.4268L86.3436 95.3006L83.4447 96.4743L70.5231 64.6011Z"
        fill="#AE63B9"
        stroke="#AE63B9"
      />
    </svg>  
  `,

  podcast: `
    <svg width="23" viewBox="0 0 134 119" fill="none">
      <path
        d="M132.642 59.2228C132.642 57.6814 132.062 56.6541 132.062 55.6264V54.5986C132.062 53.5711 131.482 52.5436 131.482 51.516V50.4883C131.482 49.4608 130.902 48.4332 130.902 47.9194L130.322 46.8918C129.743 45.3504 129.743 44.3228 129.162 42.7814C118.726 12.4673 104.81 0.136108 80.4571 0.136108C71.7596 0.136108 61.9029 1.6775 49.7263 4.7603C47.407 5.27409 46.2473 5.78791 45.0877 5.78791L40.4491 7.32931C39.2894 7.84309 38.7096 7.84309 37.5499 8.35687H36.9701L33.4911 9.89827L26.5332 12.4673C25.9534 12.9811 25.3735 13.4949 24.2139 13.4949C23.6341 13.4949 23.6341 14.0087 23.0542 14.0087L20.1551 16.0638L19.5753 16.5777L17.2559 17.6052L15.5165 19.1466H14.9366L14.3568 19.6605L13.1971 20.688L12.6173 21.2018L12.0375 21.7157L11.4577 22.2294L10.8778 22.7432C10.298 23.257 9.13836 24.2846 8.55851 25.3122C8.55851 25.826 7.97866 25.826 7.39886 26.3398L6.81901 26.8536C6.81901 27.3674 6.23921 27.8812 6.23921 28.395C5.07955 29.9364 3.91989 31.4778 3.34006 33.533C3.34006 34.0468 2.76023 34.5606 2.76023 35.5882C1.60058 37.6434 1.02075 40.2124 1.02075 42.7814C-0.138908 51.516 1.60058 61.7919 6.23921 75.6645C16.6761 105.979 30.592 118.31 54.9447 118.31C63.6422 118.31 73.4994 116.769 85.6755 113.686C124.524 102.896 137.86 87.9957 132.642 59.2228ZM39.2894 88.5093L38.1298 87.9957L37.5499 87.4821L40.4491 88.5093C40.4491 89.0235 39.8692 89.0235 39.2894 88.5093Z"
        fill="transparent"
      />
      <path
        d="M115.619 61.9039L110.322 63.8211L105.519 50.6018C102.208 41.4862 95.405 34.0568 86.6054 29.948C77.8064 25.8393 67.7321 25.3877 58.5996 28.6927C49.4665 31.9976 42.0232 38.7884 37.9067 47.5711C33.7901 56.3538 33.3377 66.4091 36.6489 75.5245L41.4508 88.744L36.1531 90.6613L31.3512 77.4417C27.5306 66.9238 28.0526 55.3217 32.8024 45.1877C37.5522 35.0539 46.1407 27.2183 56.6787 23.4049C67.2165 19.5915 78.8404 20.1125 88.9936 24.8533C99.1462 29.5943 106.997 38.1666 110.817 48.6847L115.619 61.9039Z" fill="#17B391"
        stroke="#17B391"
      />
      <path
        d="M58.4172 100.553L55.1594 101.732C53.42 102.361 51.5736 102.642 49.7253 102.56C47.8771 102.477 46.0634 102.032 44.3876 101.249C41.0033 99.669 38.3866 96.8114 37.113 93.3056L35.1923 88.0176C33.9187 84.5113 34.0927 80.6441 35.676 77.2659C37.2593 73.8883 40.1221 71.2762 43.6347 70.005L46.8928 68.8261C48.1511 68.3945 49.529 68.4733 50.7294 69.0464C51.9298 69.619 52.8567 70.6398 53.3101 71.8885L61.3774 94.0974C61.8308 95.3456 61.7749 96.7224 61.2211 97.9298C60.6673 99.1371 59.6607 100.08 58.4172 100.553ZM45.5555 75.2929C43.4479 76.0559 41.7302 77.623 40.7803 79.6496C39.8303 81.6762 39.7259 83.9966 40.49 86.1004L42.4108 91.3883C43.1749 93.4916 44.745 95.2062 46.7755 96.1546C48.8061 97.1025 51.1309 97.207 53.2385 96.4441L55.8872 95.4855L48.2044 74.3343L45.5555 75.2929ZM108.137 82.5603L104.958 83.7108C103.693 84.1682 102.298 84.106 101.08 83.5371C99.862 82.9683 98.9198 81.9394 98.4616 80.6774L90.3942 58.4684C89.936 57.2063 89.9983 55.814 90.5682 54.598C91.1381 53.382 92.1689 52.4417 93.4334 51.9841L96.6122 50.8339C100.125 49.5627 104 49.7364 107.384 51.3167C110.768 52.897 113.385 55.7545 114.658 59.2603L116.579 64.5482C117.853 68.054 117.679 71.9217 116.096 75.2994C114.512 78.6776 111.649 81.2891 108.137 82.5603ZM103.567 78.2315L106.216 77.2729C108.324 76.51 110.041 74.9428 110.991 72.9162C111.941 70.8896 112.046 68.5687 111.281 66.4654L109.361 61.1775C108.597 59.0737 107.026 57.3597 104.996 56.4112C102.965 55.4634 100.64 55.3588 98.533 56.1217L95.8838 57.0803L103.567 78.2315Z"
        fill="#17B391"
      />
      <path
        d="M44.5949 72.6491L47.853 71.4702C48.415 71.2664 49.035 71.2943 49.5764 71.5474C50.1179 71.7999 50.5366 72.2572 50.7404 72.818L58.8077 95.027C59.0112 95.5878 58.9833 96.2065 58.7303 96.7469C58.4768 97.2873 58.0186 97.7055 57.4567 97.9087L54.1987 99.0877C51.3886 100.105 48.2888 99.9659 45.5813 98.7017C42.8739 97.4375 40.7805 95.1514 39.7617 92.3463L37.8409 87.0589C36.8221 84.2538 36.9613 81.1603 38.2279 78.4576C39.4945 75.7555 41.7848 73.6656 44.5949 72.6491Z" fill="#17B391" stroke="#17B391"
        stroke-width="2"
      />
      <path
        d="M107.176 79.9166L103.998 81.0666C103.436 81.2703 102.816 81.2424 102.274 80.9894C101.733 80.7369 101.314 80.2795 101.11 79.7182L93.0432 57.5098C92.8396 56.949 92.867 56.3303 93.1205 55.7898C93.3741 55.2489 93.8317 54.8312 94.3941 54.628L97.5724 53.4775C100.383 52.4606 103.483 52.5996 106.19 53.864C108.897 55.1283 110.991 57.4138 112.009 60.2189L113.93 65.5068C114.949 68.3113 114.81 71.4054 113.543 74.1075C112.277 76.8102 109.986 78.8995 107.176 79.9166Z" fill="#17B391" stroke="#17B391"
        stroke-width="2"
      />
    </svg>  
  `,

  article: `
    <svg width="23" viewBox="0 0 132 117" fill="none">
      <path
        d="M130.101 58.081C130.101 56.5694 129.532 55.562 129.532 54.5541V53.5462C129.532 52.5386 128.965 51.5309 128.965 50.5231V49.5153C128.965 48.5076 128.396 47.4999 128.396 46.996L127.829 45.9883C127.261 44.4767 127.261 43.4689 126.693 41.9573C116.471 12.229 102.841 0.136108 78.9882 0.136108C70.4693 0.136108 60.8146 1.64772 48.8885 4.67094C46.6168 5.17481 45.4809 5.6787 44.3451 5.6787L39.8018 7.19031C38.6659 7.69416 38.098 7.69416 36.9622 8.19801H36.3943L32.9868 9.70962L26.1718 12.229C25.6039 12.7328 25.036 13.2368 23.9002 13.2368C23.3322 13.2368 23.3322 13.7406 22.7643 13.7406L19.9247 15.7561L19.3568 16.26L17.0852 17.2677L15.3814 18.7793H14.8135L14.2456 19.2832L13.1097 20.2909L12.5419 20.7948L11.9739 21.2987L11.406 21.8025L10.8381 22.3064C10.2701 22.8103 9.13433 23.818 8.56644 24.8257C8.56644 25.3296 7.9985 25.3296 7.43061 25.8335L6.86268 26.3373C6.86268 26.8412 6.29474 27.3451 6.29474 27.849C5.15893 29.3606 4.0231 30.8722 3.45519 32.8876C3.45519 33.3915 2.88727 33.8954 2.88727 34.9032C1.75144 36.9186 1.18352 39.438 1.18352 41.9573C0.0476908 50.5231 1.75144 60.6005 6.29474 74.205C16.5173 103.934 30.1472 116.026 53.9999 116.026C62.5182 116.026 72.1729 114.515 84.0993 111.492C122.149 100.91 135.212 86.2979 130.101 58.081ZM38.6659 86.8016L37.5301 86.2979L36.9622 85.7942L39.8018 86.8016C39.8018 87.3058 39.2339 87.3058 38.6659 86.8016Z"
        fill="transparent"
      />
      <path
        d="M71.962 16.6339C84.453 12.7912 93.8272 16.8412 97.9725 27.4471L112.01 63.3682C116.223 74.1476 111.632 82.3382 99.1415 86.1806L65.2504 96.6068C52.9576 100.388 43.4355 96.5395 39.2227 85.76L25.1846 49.8389C21.0397 39.233 25.7782 30.8415 38.0712 27.0597L71.962 16.6339ZM57.8354 74.5025C56.5816 74.7712 55.5988 75.6188 55.3053 76.7224C54.998 77.7908 55.4463 78.938 56.4469 79.6431C57.4334 80.3134 58.8102 80.4743 59.9687 79.9622L91.6718 70.2091C93.2312 69.5739 93.9845 68.0134 93.4427 66.6259C92.8855 65.2005 91.2061 64.3924 89.5384 64.7499L57.8354 74.5025ZM83.3402 48.8896L51.637 58.6425C49.8942 59.1788 48.9599 60.8334 49.5442 62.3287C50.1286 63.824 52.0155 64.6069 53.7585 64.0706L85.4615 54.3174C87.2003 53.7827 88.14 52.1303 87.5555 50.635C86.9715 49.1398 85.079 48.3546 83.3402 48.8896ZM57.5691 39.1752L45.4823 42.8935L45.4959 42.9283C43.753 43.4645 42.8174 45.1157 43.4017 46.6109C43.9861 48.1062 45.873 48.8891 47.6158 48.3529L59.7025 44.6346C61.4455 44.0985 62.3852 42.446 61.7859 40.9125C61.203 39.4208 59.3121 38.6391 57.5691 39.1752Z"
        fill="#EE486A"
      />
    </svg>
  `,

  job: `
    <svg width="23" viewBox="0 0 132 118" fill="none">
      <path 
        d="M130.931 58.5102C130.931 56.9838 130.359 55.9666 130.359 54.9488V53.9311C130.359 52.9137 129.786 51.8961 129.786 50.8785V49.861C129.786 48.8434 129.214 47.8258 129.214 47.3171L128.641 46.2995C128.069 44.7731 128.069 43.7555 127.496 42.2292C117.191 12.2109 103.451 0 79.4054 0C70.8177 0 61.0854 1.52636 49.0624 4.57907C46.7724 5.08785 45.6273 5.59666 44.4823 5.59666L39.9022 7.12302C38.7572 7.63178 38.1847 7.63178 37.0397 8.14055H36.4672L33.0321 9.66691L26.1619 12.2109C25.5894 12.7196 25.0169 13.2284 23.8719 13.2284C23.2994 13.2284 23.2994 13.7372 22.7269 13.7372L19.8643 15.7723L19.2918 16.2812L17.0017 17.2987L15.2842 18.825H14.7117L14.1392 19.3339L12.9942 20.3514L12.4217 20.8602L11.8491 21.369L11.2767 21.8778L10.7041 22.3865C10.1316 22.8954 8.98662 23.9129 8.41409 24.9305C8.41409 25.4392 7.84155 25.4392 7.26907 25.9481L6.69653 26.4568C6.69653 26.9656 6.12405 27.4744 6.12405 27.9832C4.97902 29.5095 3.83399 31.0359 3.26148 33.071C3.26148 33.5798 2.68897 34.0886 2.68897 35.1062C1.54395 37.1413 0.971437 39.6853 0.971437 42.2292C-0.173587 50.8785 1.54395 61.0543 6.12405 74.7915C16.4293 104.81 30.1695 117.021 54.215 117.021C62.8027 117.021 72.5356 115.495 84.558 112.442C122.917 101.757 136.084 87.0023 130.931 58.5102ZM38.7572 87.5109L37.6122 87.0023L37.0397 86.4937L39.9022 87.5109C39.9022 88.0201 39.3297 88.0201 38.7572 87.5109Z"
        fill="transparent"
      />
      <path 
        d="M83.0858 90.2238L82.836 90.8078L82.2531 90.5572L81.7609 90.7542C81.3833 90.7309 80.8386 90.7011 80.1327 90.69C78.6689 90.6661 76.5506 90.7213 73.7619 91.052C68.1856 91.7136 59.9744 93.4714 49.0024 97.8631C48.8455 97.9257 48.7428 97.9369 48.6934 97.9374C48.6681 97.9379 48.6526 97.9353 48.6451 97.9342C48.6377 97.9326 48.6344 97.931 48.6333 97.931C48.6321 97.9305 48.6289 97.9289 48.6228 97.9246C48.6166 97.9199 48.6043 97.9103 48.5871 97.8917C48.5534 97.8556 48.4906 97.7733 48.4279 97.6162L25.4544 40.1046C25.3916 39.9476 25.3806 39.8448 25.3799 39.7953C25.3796 39.77 25.3819 39.7544 25.3833 39.747C25.3847 39.7396 25.3861 39.7363 25.3866 39.7351C25.3871 39.734 25.3886 39.7307 25.3929 39.7246C25.3973 39.7184 25.407 39.7061 25.4255 39.6889C25.4618 39.6552 25.5438 39.5924 25.7007 39.5296C43.7492 32.3054 54.5975 32.2181 58.2777 32.5255L59.5989 32.6359L60.4798 31.644C62.9333 28.8815 70.8512 21.4573 88.8997 14.2331C89.0567 14.1703 89.1591 14.1592 89.2089 14.1586C89.2339 14.1583 89.2498 14.1605 89.2572 14.162C89.2641 14.1634 89.2678 14.1648 89.2689 14.1653C89.2699 14.1658 89.2731 14.1672 89.2795 14.1716C89.2853 14.176 89.298 14.1857 89.315 14.2042C89.3484 14.2405 89.4115 14.3226 89.4741 14.4796L112.448 71.9914C112.51 72.1486 112.521 72.2511 112.522 72.301C112.522 72.3259 112.52 72.3418 112.519 72.3493C112.517 72.3567 112.516 72.3599 112.516 72.3609C112.515 72.362 112.513 72.3652 112.509 72.3716C112.505 72.3774 112.495 72.3902 112.477 72.4071C112.44 72.4406 112.359 72.5038 112.202 72.5664C101.229 76.9581 94.0714 81.3524 89.577 84.7221C87.3293 86.4072 85.7567 87.8294 84.713 88.8567C84.2091 89.3521 83.8352 89.7492 83.578 90.0274L83.0858 90.2238ZM48.1 94.4122L49.0677 96.8347L51.5043 95.9083C67.9321 89.659 77.5323 89.7264 81.2513 90.0375L82.5724 90.1479L83.4533 89.1557C85.9074 86.3928 92.9242 79.9842 109.085 72.8595L111.429 71.8258L110.478 69.4442L89.8019 17.6838L88.7883 15.1455L86.2834 16.2346C76.4477 20.5114 70.0238 24.6148 65.983 27.7175C63.9622 29.2691 62.5456 30.564 61.6021 31.4953C61.1704 31.9216 60.8437 32.2662 60.614 32.5116L60.387 32.6025L59.9495 33.2392C59.9442 33.2439 59.9357 33.2507 59.924 33.2594C59.88 33.2926 59.811 33.3332 59.7246 33.3678C59.6381 33.4024 59.5607 33.4204 59.5055 33.4271C59.4912 33.4287 59.4806 33.4295 59.4737 33.4298L59.4355 33.4228L58.9571 36.0337C59.4355 33.4228 59.4345 33.4225 59.4329 33.4222L59.4297 33.4217L59.4228 33.4204L59.4064 33.4175L59.3623 33.4101L59.2319 33.3896C59.1263 33.3739 58.9821 33.3544 58.7996 33.3338C58.4353 33.2925 57.9181 33.247 57.2493 33.2187C55.9117 33.162 53.9679 33.1744 51.4206 33.4272C46.3237 33.933 38.8257 35.3996 28.9384 39.1869L26.4244 40.1498L27.4238 42.6517L48.1 94.4122Z"
        fill="#F3A701"
        stroke="#F3A701"
      />
      <path 
        d="M82.8994 90.9655C82.7424 91.0287 82.6395 91.0399 82.5902 91.0404C82.5648 91.0404 82.5494 91.0383 82.5419 91.0367C82.5345 91.0356 82.5313 91.034 82.5303 91.0335C82.5292 91.033 82.526 91.0319 82.5197 91.0271C82.5133 91.0229 82.5011 91.0133 82.4841 90.9947C82.4502 90.9586 82.3876 90.8764 82.325 90.7192L59.3515 33.2075C59.2884 33.0504 59.2772 32.9476 59.2767 32.8981C59.2767 32.8728 59.2788 32.8573 59.2804 32.8498C59.2815 32.8425 59.2831 32.8392 59.2836 32.838C59.2841 32.8369 59.2852 32.8336 59.29 32.8275C59.2942 32.8213 59.3038 32.809 59.3223 32.7918C59.3589 32.7581 59.4406 32.6952 59.5976 32.6324C59.7546 32.5696 59.8569 32.5586 59.9068 32.5579C59.9317 32.5576 59.9476 32.5599 59.9551 32.5613C59.9619 32.5627 59.9657 32.5641 59.9667 32.5646C59.9678 32.5651 59.971 32.5665 59.9773 32.5708C59.9832 32.5753 59.9959 32.585 60.0129 32.6035C60.0463 32.6398 60.1094 32.7219 60.172 32.879L83.1455 90.3906C83.2081 90.5477 83.2192 90.6507 83.2198 90.7001C83.2203 90.7256 83.2182 90.741 83.2166 90.7484C83.216 90.7526 83.215 90.7553 83.2145 90.7574C83.2139 90.759 83.2134 90.7596 83.2134 90.7601C83.2129 90.7611 83.2113 90.7649 83.207 90.7707C83.2028 90.7771 83.1932 90.7893 83.1747 90.8063C83.1381 90.8402 83.0564 90.9029 82.8994 90.9655ZM49.0024 97.8631C48.8455 97.9257 48.7428 97.9369 48.6934 97.9374C48.6681 97.9379 48.6525 97.9353 48.6451 97.9342C48.6377 97.9326 48.6344 97.931 48.6333 97.9305C48.6322 97.93 48.6289 97.9289 48.6228 97.9247C48.6166 97.9199 48.6043 97.9103 48.587 97.8918C48.5534 97.8557 48.4907 97.7734 48.4279 97.6162L30.0491 51.6069C29.9864 51.4498 29.9753 51.3471 29.9746 51.2976C29.9743 51.2722 29.9765 51.2567 29.978 51.2492C29.9795 51.2419 29.9808 51.2385 29.9813 51.2374C29.9818 51.2363 29.9832 51.233 29.9876 51.2269C29.992 51.2207 30.0016 51.2083 30.0202 51.1911C30.0565 51.1575 30.1385 51.0946 30.2954 51.0318C30.4522 50.969 30.5549 50.958 30.6044 50.9573C30.6297 50.957 30.6452 50.9592 30.6527 50.9607C30.66 50.9621 30.6633 50.9635 30.6644 50.9639C30.6656 50.9644 30.6689 50.9659 30.675 50.9703C30.6811 50.9747 30.6935 50.9843 30.7107 51.0029C30.7443 51.0392 30.8071 51.1213 30.8699 51.2784L49.2487 97.2876C49.3114 97.4447 49.3224 97.5477 49.3231 97.5971C49.3235 97.6226 49.3212 97.638 49.3197 97.6454C49.3183 97.6528 49.3169 97.656 49.3165 97.6571C49.316 97.6581 49.3145 97.6619 49.3102 97.6677C49.3058 97.6741 49.2961 97.6863 49.2775 97.7033C49.2413 97.7373 49.1593 97.7999 49.0024 97.8631Z"
        fill="#F3A701"
        stroke="#F3A701"
      />
      <path 
        d="M82.8996 90.9662C82.7426 91.0294 82.6397 91.04 82.5904 91.0411C82.5655 91.0411 82.5496 91.0389 82.5421 91.0374C82.5347 91.0363 82.5315 91.0347 82.5305 91.0342C82.5294 91.0336 82.5262 91.0321 82.5199 91.0278C82.5135 91.0236 82.5013 91.014 82.4843 90.9954C82.4504 90.9588 82.3878 90.877 82.3252 90.7199L63.9463 44.7104C63.8837 44.5533 63.8726 44.4506 63.872 44.4011C63.8715 44.3758 63.8736 44.3602 63.8752 44.3527C63.8768 44.3454 63.8779 44.342 63.8784 44.3409C63.8789 44.3398 63.8805 44.3365 63.8848 44.3304C63.889 44.3242 63.8986 44.3119 63.9171 44.2946C63.9537 44.261 64.0354 44.1981 64.1924 44.1354C64.3494 44.0726 64.4523 44.0615 64.5016 44.0608C64.5271 44.0605 64.5424 44.0627 64.5499 44.0642C64.5573 44.0657 64.5605 44.067 64.5615 44.0675C64.5626 44.068 64.5658 44.0694 64.5721 44.0738C64.5785 44.0782 64.5907 44.0878 64.6077 44.1064C64.6416 44.1427 64.7042 44.2248 64.7668 44.3819L83.1457 90.3913C83.2088 90.5484 83.2194 90.6509 83.2205 90.7008C83.2205 90.7257 83.2184 90.7416 83.2168 90.7491C83.2157 90.7565 83.2141 90.7597 83.2136 90.7608C83.2131 90.7618 83.2115 90.765 83.2072 90.7714C83.203 90.7772 83.1934 90.79 83.1749 90.8069C83.1383 90.8409 83.0566 90.9036 82.8996 90.9662ZM49.0027 97.8632C48.8457 97.9264 48.7431 97.937 48.6936 97.9381C48.6683 97.9381 48.6529 97.936 48.6454 97.9344C48.638 97.9333 48.6347 97.9317 48.6335 97.9312C48.6324 97.9306 48.6291 97.9291 48.623 97.9248C48.6168 97.9206 48.6045 97.911 48.5874 97.8924C48.5537 97.8558 48.4909 97.774 48.4282 97.6169L33.4954 60.2342C33.4326 60.077 33.4216 59.9745 33.4209 59.9246C33.4206 59.8997 33.4229 59.8838 33.4243 59.8763C33.4258 59.8694 33.4271 59.8657 33.4276 59.8646C33.4281 59.8636 33.4295 59.8604 33.4339 59.854C33.4383 59.8482 33.448 59.8354 33.4665 59.8185C33.5028 59.785 33.5848 59.7218 33.7417 59.6592C33.8986 59.5965 34.0013 59.5854 34.0507 59.5849C34.076 59.5843 34.0915 59.5864 34.099 59.588C34.1063 59.5896 34.1096 59.5907 34.1108 59.5912C34.1119 59.5918 34.1152 59.5933 34.1213 59.5976C34.1275 59.6018 34.1398 59.6119 34.157 59.6305C34.1907 59.6666 34.2534 59.7484 34.3161 59.9055L49.2489 97.2883C49.3117 97.4454 49.3228 97.5484 49.3234 97.5978C49.3237 97.6227 49.3215 97.6387 49.32 97.6461C49.3194 97.6493 49.3187 97.6519 49.3182 97.6535C49.3175 97.6556 49.317 97.6572 49.3167 97.6578C49.3162 97.6588 49.3148 97.662 49.3105 97.6684C49.3061 97.6748 49.2963 97.687 49.2778 97.704C49.2416 97.7379 49.1596 97.8006 49.0027 97.8632Z"
        fill="#F3A701"
        stroke="#F3A701"
      />
      <path 
        d="M82.8997 90.9662C82.7427 91.0289 82.6403 91.04 82.591 91.0405C82.5655 91.0411 82.5501 91.0389 82.5427 91.0374C82.5353 91.0358 82.5316 91.0347 82.5305 91.0342C82.5295 91.0336 82.5263 91.0321 82.5204 91.0278C82.5141 91.0236 82.5019 91.0135 82.4844 90.9949C82.451 90.9588 82.3879 90.8765 82.3253 90.7199L67.3927 53.3371C67.3296 53.18 67.319 53.0772 67.3179 53.0276C67.3179 53.0023 67.32 52.9868 67.3216 52.9793C67.3227 52.972 67.3243 52.9686 67.3248 52.9675C67.3253 52.9664 67.3269 52.9631 67.3312 52.957C67.3354 52.9508 67.345 52.9384 67.3635 52.9212C67.4001 52.8876 67.4818 52.8247 67.6388 52.7619C67.7958 52.6991 67.8981 52.6881 67.948 52.6874C67.9729 52.687 67.9888 52.6893 67.9962 52.6908C68.0037 52.6922 68.0069 52.6936 68.0079 52.6941C68.009 52.6945 68.0122 52.696 68.0185 52.7004C68.0244 52.7048 68.0371 52.7144 68.0541 52.733C68.088 52.7693 68.1506 52.8514 68.2132 53.0085L83.1463 90.3912C83.2089 90.5484 83.22 90.6509 83.2205 90.7002C83.2211 90.7257 83.2184 90.7411 83.2174 90.7485C83.2158 90.756 83.2142 90.7597 83.2136 90.7608C83.2136 90.7618 83.212 90.765 83.2078 90.7708C83.203 90.7772 83.1935 90.7894 83.1749 90.8069C83.1389 90.8404 83.0566 90.9036 82.8997 90.9662ZM49.0029 97.8632C48.846 97.9259 48.7433 97.937 48.6939 97.9376C48.6686 97.9381 48.6531 97.936 48.6456 97.9344C48.6383 97.9328 48.635 97.9317 48.6338 97.9312C48.6327 97.9306 48.6294 97.9291 48.6233 97.9248C48.6171 97.9206 48.6048 97.9105 48.5876 97.8919C48.554 97.8558 48.4912 97.7735 48.4284 97.6169L36.9417 68.8609C36.8789 68.7037 36.8679 68.6007 36.8672 68.5513C36.8669 68.5264 36.8692 68.5105 36.8706 68.503C36.872 68.4956 36.8734 68.4924 36.8739 68.4913C36.8744 68.4903 36.8758 68.4871 36.8802 68.4807C36.8846 68.4744 36.8943 68.4621 36.9128 68.4452C36.9491 68.4112 37.031 68.3485 37.188 68.2859C37.3449 68.2227 37.4475 68.2121 37.497 68.211C37.5223 68.211 37.5378 68.2131 37.5452 68.2147C37.5526 68.2158 37.556 68.2174 37.5571 68.2179C37.5582 68.2185 37.5615 68.2201 37.5676 68.2243C37.5738 68.2285 37.5861 68.2381 37.6033 68.2567C37.6369 68.2933 37.6997 68.3751 37.7624 68.5322L49.2492 97.2883C49.3119 97.4454 49.323 97.5479 49.3237 97.5972C49.324 97.6227 49.3217 97.6381 49.3203 97.6456C49.3188 97.653 49.3175 97.6567 49.317 97.6578C49.3165 97.6588 49.3151 97.662 49.3107 97.6684C49.3063 97.6742 49.2967 97.6864 49.2781 97.704C49.2418 97.7374 49.1598 97.8006 49.0029 97.8632Z"
        fill="#F3A701"
        stroke="#F3A701"
      />
      <path 
        d="M82.9002 90.9662C82.7433 91.0289 82.6404 91.04 82.591 91.0406C82.5656 91.0411 82.5502 91.0384 82.5428 91.0374C82.5401 91.0368 82.538 91.0363 82.5359 91.0358C82.5332 91.0347 82.5316 91.0342 82.5311 91.0337C82.53 91.0331 82.5263 91.0321 82.5205 91.0278C82.5141 91.023 82.5019 91.0135 82.485 90.9949C82.451 90.9588 82.3884 90.8765 82.3253 90.7194L70.8386 61.9633C70.776 61.8067 70.7648 61.7037 70.7643 61.6543C70.7638 61.6289 70.7664 61.6135 70.7675 61.606C70.7691 61.5986 70.7707 61.5954 70.7712 61.5944C70.7717 61.5928 70.7728 61.5896 70.7776 61.5837C70.7818 61.5774 70.7914 61.5652 70.8099 61.5476C70.846 61.5142 70.9282 61.4515 71.0852 61.3884C71.2422 61.3257 71.3445 61.3146 71.3944 61.314C71.4193 61.3135 71.4347 61.3162 71.4426 61.3172C71.4495 61.3188 71.4533 61.3204 71.4543 61.3204C71.4554 61.3209 71.4586 61.3225 71.4649 61.3268C71.4708 61.3316 71.4835 61.3411 71.5005 61.3597C71.5339 61.3958 71.597 61.4781 71.6596 61.6352L83.1463 90.3907C83.2089 90.5479 83.2201 90.6509 83.2206 90.7003C83.2211 90.7257 83.219 90.7411 83.2174 90.7486C83.2158 90.756 83.2148 90.7592 83.2142 90.7603C83.2137 90.7613 83.2121 90.765 83.2079 90.7709C83.2036 90.7772 83.1935 90.7894 83.175 90.807C83.1389 90.8404 83.0567 90.9031 82.9002 90.9662ZM49.0032 97.8633C48.8463 97.9259 48.7436 97.9371 48.6942 97.9376C48.6689 97.9381 48.6534 97.9355 48.6459 97.9344C48.6385 97.9328 48.6352 97.9312 48.6341 97.9307C48.633 97.9307 48.6297 97.9291 48.6236 97.9248C48.6174 97.9201 48.6051 97.9105 48.5879 97.8919C48.5542 97.8558 48.4914 97.7735 48.4287 97.6164L40.388 77.4876C40.3252 77.3304 40.3142 77.2274 40.3135 77.1781C40.3132 77.1526 40.3155 77.1372 40.3169 77.1297C40.3183 77.1223 40.3197 77.1191 40.3202 77.1181C40.3207 77.117 40.3221 77.1133 40.3264 77.1074C40.3308 77.1011 40.3406 77.0889 40.3591 77.0719C40.3953 77.0379 40.4773 76.9753 40.6343 76.9121C40.7912 76.8494 40.8938 76.8383 40.9433 76.8378C40.9686 76.8372 40.9841 76.8399 40.9916 76.8409C40.9989 76.8425 41.0022 76.8441 41.0034 76.8447C41.0045 76.8452 41.0078 76.8462 41.0139 76.851C41.0201 76.8553 41.0324 76.8648 41.0496 76.8834C41.0832 76.9195 41.146 77.0018 41.2087 77.1589L49.2495 97.2877C49.3122 97.4449 49.3233 97.5479 49.3239 97.5973C49.3242 97.6228 49.322 97.6381 49.3205 97.6456C49.3191 97.653 49.3178 97.6562 49.3173 97.6573C49.3168 97.6588 49.3153 97.662 49.311 97.6679C49.3066 97.6742 49.2969 97.6865 49.2784 97.704C49.2421 97.7374 49.1601 97.8001 49.0032 97.8633Z"
        fill="#F3A701"
        stroke="#F3A701"
      />
      <path 
        d="M82.8984 90.9657C82.7415 91.0289 82.6386 91.0395 82.5892 91.0406C82.5638 91.0406 82.5484 91.0385 82.541 91.0369C82.5383 91.0363 82.5362 91.0358 82.5346 91.0358C82.5314 91.0347 82.5298 91.0342 82.5293 91.0337C82.5282 91.0331 82.5251 91.0316 82.5187 91.0273C82.5123 91.0231 82.5001 91.0135 82.4832 90.9949C82.4492 90.9583 82.3866 90.8765 82.324 90.7194L74.2831 70.5901C74.2205 70.4329 74.2094 70.3304 74.2089 70.2811C74.2083 70.2556 74.2104 70.2402 74.212 70.2328C74.2136 70.2253 74.2147 70.2216 74.2152 70.2205C74.2157 70.2195 74.2173 70.2163 74.2216 70.2105C74.2258 70.2041 74.2359 70.1919 74.2545 70.1744C74.2905 70.1409 74.3727 70.0777 74.5292 70.0151C74.6862 69.9524 74.7891 69.9413 74.8384 69.9408C74.8639 69.9402 74.8792 69.9423 74.8867 69.9439C74.8941 69.9455 74.8973 69.9466 74.8983 69.9471C74.8994 69.9477 74.9031 69.9492 74.9089 69.9535C74.9153 69.9577 74.9275 69.9678 74.945 69.9864C74.9784 70.0225 75.041 70.1048 75.1041 70.2614L83.1445 90.3907C83.2071 90.5479 83.2183 90.6504 83.2193 90.7003C83.2193 90.7252 83.2172 90.7411 83.2156 90.7486C83.2145 90.756 83.213 90.7592 83.2124 90.7603C83.2119 90.7613 83.2103 90.7645 83.2061 90.7709C83.2018 90.7767 83.1923 90.7895 83.1737 90.8065C83.1371 90.8404 83.0554 90.9031 82.8984 90.9657ZM49.0015 97.8627C48.8446 97.9259 48.7419 97.9365 48.6925 97.9376C48.6672 97.9376 48.6516 97.9355 48.6442 97.9339C48.6368 97.9328 48.6335 97.9312 48.6324 97.9307C48.6313 97.9302 48.628 97.9286 48.6219 97.9243C48.6157 97.9201 48.6034 97.9105 48.5861 97.8919C48.5526 97.8553 48.4898 97.7735 48.427 97.6164L43.8323 86.1138C43.7696 85.9572 43.7585 85.8542 43.7578 85.8048C43.7575 85.7793 43.7598 85.7639 43.7612 85.7565C43.7627 85.749 43.764 85.7459 43.7645 85.7448C43.765 85.7432 43.7664 85.74 43.7708 85.7342C43.7752 85.7278 43.7849 85.7156 43.8034 85.6981C43.8397 85.6646 43.9217 85.602 44.0786 85.5388C44.2355 85.4761 44.3382 85.465 44.3876 85.4645C44.4129 85.4639 44.4284 85.4666 44.4359 85.4677C44.4432 85.4692 44.4465 85.4708 44.4477 85.4708C44.4488 85.4714 44.4521 85.473 44.4582 85.4772C44.4644 85.482 44.4767 85.4915 44.4939 85.5101C44.5275 85.5462 44.5903 85.6285 44.6531 85.7857L49.2478 97.2878C49.3105 97.4449 49.3215 97.5479 49.3222 97.5973C49.3225 97.6222 49.3203 97.6382 49.3188 97.6456C49.3174 97.653 49.316 97.6562 49.3155 97.6573C49.3151 97.6583 49.3136 97.6615 49.3093 97.6679C49.3049 97.6743 49.2952 97.6865 49.2766 97.7035C49.2404 97.7374 49.1584 97.8001 49.0015 97.8627Z"
        fill="#F3A701"
        stroke="#F3A701"
      />
      <path 
        d="M82.899 90.9657C82.7421 91.0289 82.6397 91.04 82.5904 91.0406C82.5649 91.0406 82.5495 91.0384 82.5421 91.0369C82.5347 91.0358 82.531 91.0342 82.5299 91.0337C82.5288 91.0331 82.5257 91.0321 82.5198 91.0273C82.5135 91.023 82.5013 91.0135 82.4838 90.9949C82.4504 90.9588 82.3872 90.8765 82.3247 90.7194L77.7301 79.2173C77.6675 79.0601 77.6563 78.9571 77.6553 78.9078C77.6553 78.8823 77.6574 78.8669 77.659 78.8594C77.6606 78.852 77.6616 78.8488 77.6622 78.8478C77.6627 78.8467 77.6643 78.843 77.6685 78.8371C77.6728 78.8308 77.6823 78.8186 77.7009 78.8016C77.7375 78.7676 77.8192 78.705 77.9761 78.6418C78.1331 78.5791 78.236 78.568 78.2854 78.5675C78.3108 78.5669 78.3262 78.5696 78.3336 78.5706C78.341 78.5722 78.3442 78.5738 78.3453 78.5744C78.3463 78.5749 78.3495 78.5759 78.3559 78.5802C78.3623 78.585 78.3745 78.5945 78.3914 78.6131C78.4254 78.6492 78.488 78.7315 78.5505 78.8886L83.1457 90.3907C83.2083 90.5479 83.2194 90.6509 83.2199 90.7003C83.2205 90.7257 83.2178 90.7411 83.2167 90.7486C83.2151 90.756 83.2136 90.7592 83.213 90.7603C83.2125 90.7613 83.2114 90.765 83.2072 90.7709C83.2024 90.7772 83.1929 90.7895 83.1743 90.8064C83.1382 90.8404 83.056 90.9031 82.899 90.9657Z"
        fill="#F3A701"
        stroke="#F3A701"
      />
      <path 
        d="M112.006 71.673L88.1391 15.9279L77.5317 21.2369L69.5761 26.546L56.3169 34.5096L27.1465 39.8187L32.4502 53.0912L51.0132 95.5638L56.3169 92.9092L72.228 90.2547H82.8354L96.0946 79.6366L112.006 71.673Z"
        fill="#F3A701"
      />
    </svg>  
  `,

  heart: `
    <svg width="15" viewBox="0 0 133 117" fill="none">
      <path
        d="M119.077 8.70289C104.062 -3.92172 80.8651 -2.02544 66.5 12.5994C52.135 -2.02544 28.9379 -3.9477 13.9235 8.70289C-5.61091 25.1461 -2.75349 51.9539 11.17 66.163L56.7328 112.583C59.3305 115.233 62.8114 116.713 66.5 116.713C70.2147 116.713 73.6696 115.259 76.2672 112.609L121.83 66.189C135.728 51.9798 138.637 25.172 119.077 8.70289V8.70289ZM112.946 57.4089L67.3832 103.829C66.7598 104.453 66.2403 104.453 65.6168 103.829L20.0539 57.4089C10.5725 47.7457 8.65022 29.4582 21.9502 18.2623C32.0551 9.76792 47.641 11.0408 57.4082 20.9898L66.5 30.2634L75.5918 20.9898C85.411 10.9888 100.997 9.76792 111.05 18.2363C124.324 29.4322 122.35 47.8236 112.946 57.4089V57.4089Z"
        fill="var(--layer-2-text-2)"
      />
    </svg>
  `,

  message: `
    <svg width="15" viewBox="0 0 111 111" fill="none">
      <path
        d="M105.375 72.125C105.375 75.0645 104.207 77.8836 102.129 79.9621C100.05 82.0406 97.2311 83.2083 94.2917 83.2083H27.7917L5.625 105.375V16.7083C5.625 13.7689 6.7927 10.9498 8.87123 8.87123C10.9498 6.7927 13.7689 5.625 16.7083 5.625H94.2917C97.2311 5.625 100.05 6.7927 102.129 8.87123C104.207 10.9498 105.375 13.7689 105.375 16.7083V72.125Z"
        stroke="var(--layer-2-text-2)"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>  
  `,

  follower: `
    <svg width="15" viewBox="0 0 22 33" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.3337 7.33333C18.3337 11.3834 15.0503 14.6667 11.0003 14.6667C6.95024 14.6667 3.66699 11.3834 3.66699 7.33333C3.66699 3.28324 6.95024 0 11.0003 0C15.0503 0 18.3337 3.28324 18.3337 7.33333ZM14.667 7.33333C14.667 9.35838 13.0254 11 11.0003 11C8.97523 11 7.33366 9.35838 7.33366 7.33333C7.33366 5.30829 8.97523 3.66667 11.0003 3.66667C13.0254 3.66667 14.667 5.30829 14.667 7.33333Z"
        fill="var(--layer-2-text-2)"
      />
      <path
        d="M18.3333 22C18.3333 20.9875 17.5126 20.1667 16.5 20.1667H5.5C4.48749 20.1667 3.66667 20.9875 3.66667 22V33H0V22C0 18.9623 2.46244 16.5 5.5 16.5H16.5C19.5377 16.5 22 18.9623 22 22V33H18.3333V22Z"
        fill="var(--layer-2-text-2)"
      />
    </svg>
  `,

  bell: `
    <svg width="15" viewBox="0 0 24 33" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 3V3.43482C19.3372 4.72565 22.5 8.74347 22.5 13.5V24H24V27H0V24H1.5V13.5C1.5 8.74347 4.66277 4.72565 9 3.43482V3C9 1.34314 10.3431 0 12 0C13.6569 0 15 1.34314 15 3ZM4.5 24H19.5V13.5C19.5 9.35787 16.1421 6 12 6C7.85787 6 4.5 9.35787 4.5 13.5V24ZM15 30V28.5H9V30C9 31.6569 10.3431 33 12 33C13.6569 33 15 31.6569 15 30Z"
        fill="var(--layer-2-text-2)"
      />
    </svg>  
  `,
}

export const ITEMS_DOM_STRING_COMPONENTS: Lib.T.ItemsDOMStringComponents = {
  profile: ({ hasNap, seen, profile, size = 5 }) => `
    <div
      class="napElementComponents profileComponent size${size} ${hasNap ? 'hasNap' : ''} ${hasNap && seen ? 'seen' : ''}"
      data-has-nap="${hasNap}"
      data-seen="${seen}"
    >
      <div></div>
      <img src="${profile}" class="profile" alt="user" draggable="false">
    </div>
  `,
}

export const ITEMS_DOM_STRING: Lib.T.ItemsDOMStringGenerators = {
  text: innerText => `
    <p data-text="${innerText}">${innerText}</p>
  `,

  post: ({ post, user }) => `
    <article class="napElement post no-effect" data-post-id="${post.id}">
      <header>
        <div class="profilePicture">
          ${ITEMS_DOM_STRING_COMPONENTS.profile({ hasNap: user.hasNap, seen: user.seen, profile: user.profile, size: 3 })}
        </div>

        <p class="profileDetail">
          <span class="fullName">${user.fullName}</span>
          <span class="job">${user.job}</span>
        </p>
      </header>

      <div>
        <img src="${post.cover}" alt="cover photo" draggable="false" class="cover" />

        <time data-time="${post.year}-${post.month}-${post.day}" style=" background: var(--c-${post.topic}-trans-1); color: var(--c-${post.topic})">
          <span class="month">${post.month}</span>• <span class="day">${post.day}</span>•
          <span class="year">${post.year}</span>
        </time>

        <h2 class="title">${Str.cut(post.title, 25)}</h2>

        <summary>${Str.cut(post.summary, 50)}</summary>
      </div>

      <footer>
        <span></span>

        <div>
          ${
            post.paymentRequired
              ? `
                <div class="payment withEmptySpan" style="background: var(--c-${post.topic}-trans-2)">
                  ${ITEMS_ICONS.paymentRequired(post.topic)}
                  <span>0</span>
                </div>
              `
              : ''
          }

          <div class="info withEmptySpan">
            ${ITEMS_ICONS[post.topic]}
            <span class="topic" data-topic="${post.topic}">0</span>
          </div>

          <div class="info">
            ${ITEMS_ICONS.heart}
            <span data-likes="${post.likes}" class="likes">${Num.stringify(post.likes)}</span>
          </div>

          <div class="info">
            ${ITEMS_ICONS.message}
            <span data-comments="${post.comments}" class="comments">${Num.stringify(post.comments)}</span>
          </div>

          <div class="info withEmptySVG">
            <svg></svg>
            <span class="timeToRead" data-timeToRead="${post.timeToRead}">${post.timeToRead} "</span>
          </div>
        </div>
      </footer>
    </article>
  `,

  mention: ({ fullName, username, job, profile, userID, hasNap, seen, followers, subscribes }) => `
    <div class="napElement mention no-effect" data-user-id="${userID}">
      <div class="profileContainer">
        ${ITEMS_DOM_STRING_COMPONENTS.profile({ hasNap, seen, profile, size: 6 })}
      </div>

      <p class="username">@${username}</p>

      <p class="name">${fullName}</p>

      <p class="job">${job}</p>

      <div class="detail">
        <div>
          ${ITEMS_ICONS.follower}
          <span data-followers="${followers}" class="followers">${Num.stringify(followers)}</span>
        </div>

        <div>
          ${ITEMS_ICONS.bell}
          <span data-subscribes="${subscribes}" class="subscribes">${Num.stringify(subscribes)}</span>
        </div>
      </dib>
    </div>
  `,

  question: ({ hint, question, questionerUser: { hasNap, profile, seen } }) => `
    <div class="napElement question no-effect">
      <div class="profileContainer">
        ${ITEMS_DOM_STRING_COMPONENTS.profile({ hasNap, seen, profile, size: 4 })}
      </div>
      
      <p class="questionText">${question}</p>
      
      <p class="hint">${hint}</p>

      <span>Type something here</span>
    </div>
  `,
}
