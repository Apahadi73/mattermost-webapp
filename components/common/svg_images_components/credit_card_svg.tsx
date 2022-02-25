// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

type SvgProps = {
    width: number;
    height: number;
}

const CreditCardSvg = (props: SvgProps) => (
    <svg
        width={props.width ? props.width.toString() : '489'}
        height={props.height ? props.height.toString() : '317'}
        viewBox='0 0 234 152'
        fill='none'
    >
        <g clipPath='url(#clip0)'>
            <path
                d='M138.978 49.6651C142.737 53.4214 143.517 59.1062 140.683 62.3984L74.9691 138.745C70.9805 143.382 63.9993 143.531 59.4457 138.956L3.34698 82.8884C-1.20661 78.3377 -1.08212 71.3609 3.55287 67.3749L79.9536 1.70829C83.2431 -1.12452 88.9315 -0.349295 92.6902 3.41183L138.978 49.6651Z'
                fill='#AFB3C0'
            />
            <path
                d='M113.112 23.8156L28.0925 107.623L8.29321 87.8361L96.7698 7.49341L113.112 23.8156Z'
                fill='#1B1D22'
            />
            <path
                d='M109.976 40.7646L50.1709 101.761L66.197 117.777L123.933 54.7086L109.976 40.7646Z'
                fill='white'
            />
            <path
                d='M75.8405 96.3108C72.4887 93.2101 74.4759 87.3913 75.6969 84.2188C77.6121 79.3092 79.5992 88.7359 79.6998 90.1954C80.0212 94.9865 79.598 99.7983 78.4453 104.46C77.7987 107.066 76.8573 109.589 75.6394 111.982C74.9021 113.47 73.8461 114.777 72.5462 115.81C69.3189 117.758 67.2792 115.863 66.4365 110.145C66.7632 108.397 67.5955 106.783 68.8306 105.503C73.0442 100.278 79.7094 97.6315 84.5886 93.5689C85.0674 93.1669 84.2965 92.4109 83.8225 92.8033C77.9904 97.6506 66.0007 101.651 65.2586 111.231C64.7797 117.566 71.1959 118.925 74.6434 115.399C79.1252 110.815 80.2696 102.479 80.6574 96.2151C80.8825 92.5736 81.8066 82.4961 76.4534 81.2711C76.3501 81.239 76.239 81.2428 76.1381 81.2819C76.0372 81.321 75.9526 81.3931 75.8979 81.4864C73.7768 85.2092 70.7458 93.0186 75.1318 97.0621C75.1812 97.1086 75.2393 97.1449 75.3027 97.169C75.3661 97.1931 75.4336 97.2044 75.5014 97.2024C75.5692 97.2004 75.636 97.1851 75.6978 97.1574C75.7597 97.1296 75.8155 97.0899 75.8621 97.0405C75.9086 96.9912 75.9449 96.9332 75.969 96.8698C75.9931 96.8065 76.0045 96.739 76.0025 96.6712C76.0005 96.6035 75.9852 96.5368 75.9574 96.4749C75.9296 96.4131 75.8899 96.3573 75.8405 96.3108V96.3108Z'
                fill='#63697E'
            />
            <path
                d='M83.1042 92.7026C87.8924 95.3536 89.0943 84.8167 88.467 81.936C88.4445 81.8509 88.4009 81.7727 88.3403 81.7088C88.2797 81.6448 88.204 81.5971 88.1201 81.5699C88.0362 81.5428 87.9469 81.5371 87.8603 81.5534C87.7737 81.5697 87.6925 81.6075 87.6243 81.6633C85.1057 83.6778 84.6604 88.9702 86.8007 92.0519C86.8414 92.1313 86.9025 92.1984 86.9778 92.2464C87.0531 92.2944 87.1398 92.3215 87.229 92.3249C87.3183 92.3284 87.4068 92.308 87.4855 92.2659C87.5642 92.2238 87.6303 92.1614 87.677 92.0853C89.0568 89.2287 90.225 86.2747 91.1724 83.2472C91.5985 81.9695 92.6998 82.2901 93.5665 81.3809C95.3429 79.5865 97.0666 77.7586 98.8 75.9738C100.993 73.7152 101.75 70.7101 103.77 68.461C106.351 65.5612 108.836 64.1544 110.124 60.178C110.421 59.2688 110.445 57.1537 108.874 57.0341C105.848 56.7996 103.196 63.1926 107.232 62.5801C112.169 61.8289 116.593 56.0915 119.792 53.0098C120.175 52.6462 119.471 51.9475 119.097 52.3112C117.498 53.828 115.865 55.3354 114.165 56.7948C112.818 57.9635 111.409 59.0578 109.942 60.0727C109.195 60.5847 103.55 63.0777 107.136 58.8907L109.052 60.3741C108.845 60.9032 108.607 61.4194 108.338 61.9198C107.854 62.8459 107.29 63.728 106.653 64.5563C105.47 66.1594 103.598 67.1021 102.257 68.5998C100.552 70.5139 99.8917 73.2271 98.0674 75.2177C97.263 76.0981 92.8722 81.7064 91.3112 81.046C91.2117 81.0077 91.1014 81.008 91.0021 81.0469C90.9028 81.0859 90.8217 81.1607 90.7749 81.2565C90.2961 82.6921 89.779 84.1707 89.281 85.635C89.0991 86.1709 87.0114 90.3483 87.0736 90.4919C86.1591 88.3099 86.4703 85.5297 87.2365 83.6156C87.5305 84.1529 87.7065 84.7466 87.7527 85.3572C87.799 85.9678 87.7144 86.5813 87.5046 87.1567C87.1551 89.755 85.8335 91.3101 83.5447 91.7934C82.9414 91.5016 82.5009 92.3725 83.1042 92.7026Z'
                fill='#63697E'
            />
            <path
                d='M173.233 23.3228C170.762 27.3566 162.929 24.1554 161.435 31.8594C164.308 31.8594 175.019 33.3333 175.019 33.3333L173.233 23.3228Z'
                fill='#66320A'
            />
            <path
                d='M161.085 63.8243C157.647 69.9301 129.717 82.0078 136.373 113.068C141.089 135.08 151.882 143.87 149.162 147.521C147.175 150.211 145.614 153.474 150.336 149.612C156.014 144.971 158.059 148.048 154.362 136.86C150.833 126.199 147.74 97.794 165.342 87.7452C182.943 77.6964 188.689 72.6385 179.999 60.2736C176.814 55.7613 161.085 63.8243 161.085 63.8243Z'
                fill='#FFBC1F'
            />
            <path
                d='M147.07 139.932C147.659 139.765 152.634 138.19 154.525 137.391C157.987 147.966 155.923 145.047 150.336 149.636C145.614 153.498 147.175 150.234 149.162 147.545C150.273 146.052 149.129 143.688 147.07 139.932Z'
                fill='#1C58D9'
            />
            <path
                d='M181.296 32.6442L181.741 23.605L182.958 20.2554C182.211 16.9393 180.276 15.3555 179.194 15.0875C176.723 14.4846 175.364 14.3888 174.032 15.4272C173.3 16.0541 172.17 18.9156 171.686 21.1694C171.428 22.38 170.843 23.3466 171.653 24.0979C172.206 24.5416 172.797 24.9355 173.42 25.275L173.544 30.9454L181.296 32.6442Z'
                fill='#FFBC1F'
            />
            <path
                d='M173.233 17.71C171.317 18.8058 171.035 19.1455 171.035 19.1455C170.752 19.9398 172.898 20.7485 172.898 20.7485L173.233 17.71Z'
                fill='#FFBC1F'
            />
            <path
                d='M176.058 26.0408C175.155 25.9995 174.273 25.7507 173.482 25.3135C173.194 25.1365 174.004 25.8399 174.301 26.0025C174.675 26.2698 175.112 26.4348 175.569 26.4811C175.909 26.4763 176.398 26.0647 176.058 26.0408Z'
                fill='#A37200'
            />
            <path
                d='M191.964 67.0018C193.554 89.492 194.148 119.72 214.469 124.725C234.79 129.73 234.019 127.271 234.01 134.817C234 142.363 232.444 141.248 231.515 136.41C230.323 130.19 208.129 141.301 193.075 128.898C178.021 116.495 171.653 92.5306 169.359 67.954C167.726 50.6078 191.964 67.0018 191.964 67.0018Z'
                fill='#FFBC1F'
            />
            <path
                d='M225.659 127.261C234.45 129.122 234 129.065 233.995 134.817C233.995 142.368 232.429 141.248 231.501 136.41C231.084 134.257 228.149 134.185 223.839 134.496C224.701 132.156 225.311 129.73 225.659 127.261V127.261Z'
                fill='#1C58D9'
            />
            <path
                d='M122.425 34.5297C122.904 33.6923 126.83 33.5727 131.465 37.3482C136.1 41.1236 143.627 45.7796 152.002 35.6064C159.515 26.4811 164.509 29.8642 172.112 30.2183C174.813 30.5581 185.725 31.9505 188.507 32.1993C192.601 32.1323 199.52 34.0703 204.308 22.8827C206.152 18.576 208.057 12.4271 210.696 8.25926C212.515 5.38817 214.301 3.64633 215.963 2.9477C217.213 2.4309 216.518 3.42621 215.561 4.86176C214.914 5.81879 215.628 5.71835 215.269 6.94335C215.058 7.66112 214.962 8.08218 214.727 8.69946C214.523 9.25444 214.353 9.82184 214.22 10.3982C214.115 10.8337 214.009 11.3026 213.918 11.7955C213.918 11.9103 213.87 12.0252 213.851 12.1448C212.894 17.4946 212.343 25.347 211.606 28.4956C209.053 39.3531 203.432 45.7653 193.271 48.0095C193.195 49.5455 193.089 51.2299 192.955 53.0865C191.122 78.711 193.731 71.7487 177.059 71.7869C160.386 71.8252 155.952 81.7735 158.461 67.4803C159.634 60.7811 159.242 52.9669 160.568 44.9901C158.025 46.5692 153.927 49.8087 149.809 50.8184C136.991 53.9622 125.159 37.2477 125.044 36.1567C124.929 34.5154 121.956 35.3671 122.425 34.5297Z'
                fill='#FFBC1F'
            />
            <path
                d='M157.01 48.7128C158.715 47.6505 159.404 45.7029 160.601 44.966C160.124 48.0004 159.805 51.0574 159.644 54.1248C159.51 56.302 159.4 58.4314 159.256 60.513C159.125 62.8331 158.87 65.1445 158.49 67.4371C155.986 81.7542 160.405 71.782 177.092 71.7437C191.687 71.7437 191.505 77.0553 192.462 61.1829C192.462 61.1446 192.462 61.1064 192.462 61.0776C192.505 60.3982 192.548 59.6804 192.596 58.9195C192.702 57.1825 192.831 55.235 192.984 53.0529C193.113 51.1915 193.224 49.5071 193.305 47.9711C197.772 46.9854 201.354 46.6552 204.193 44.0282C202.757 39.8268 200.842 34.3334 198.05 30.845C195.043 32.5725 191.979 32.2806 189.589 32.1992C189.206 32.1992 188.847 32.1992 188.507 32.1992L187.071 32.0509L183.149 31.5724C182.354 35.7403 175.881 35.1182 173.745 33.6635C172.466 32.7669 171.455 31.5396 170.82 30.1129C169.924 30.0315 169.057 29.9215 168.215 29.8114C167.372 29.7014 166.649 29.5914 165.888 29.4956C161.31 28.9501 157.269 29.175 152.002 35.5871C151.681 35.9795 151.355 36.3432 151.044 36.6925C152.485 40.5493 155.038 45.0856 157.01 48.7128Z'
                fill='white'
            />
            <path
                d='M145.25 78.73C148.397 83.1645 152.019 87.2417 156.053 90.8891C156.163 90.9943 156.283 91.0996 156.397 91.2001C157.192 91.9227 158.011 92.6357 158.835 93.3152C159.165 92.9318 159.527 92.5765 159.917 92.2528C160.027 92.1523 160.151 92.0471 160.276 91.9466C161.593 90.846 163.484 89.4727 165.366 88.1807C168.009 86.3624 170.633 84.6779 171.533 84.1181C172.203 87.7931 172.969 91.4011 173.927 94.8942C173.97 95.0522 174.009 95.2101 174.052 95.3728C174.2 95.9183 174.348 96.459 174.502 96.9997C180.655 96.7365 186.755 96.1623 192.697 94.4684C192.85 94.4301 192.999 94.3823 193.147 94.3392L194.105 94.052C194.215 94.0186 194.325 93.9947 194.43 93.9707C194.32 93.2673 194.21 92.4826 194.109 91.6356L194.052 91.1571C192.922 81.4863 192.338 64.0731 192.467 61.2116C192.467 61.1733 192.467 61.135 192.467 61.1063C192.118 60.8161 191.783 60.5079 191.466 60.1828C191.327 60.0345 191.184 59.8909 191.05 59.7377C188.014 56.3451 186.515 51.402 185.649 48.3874C185.95 41.736 186.563 38.2094 189.594 32.2279C189.211 32.2279 187.679 32.1227 187.071 32.0605C185.007 36.4867 184.016 41.2431 183.523 46.0905C177.853 45.0569 172.16 44.1382 166.472 43.2577C166.674 38.7505 167.257 34.2684 168.215 29.8593C167.42 29.7492 166.649 29.6392 165.888 29.5435C164.799 34.5346 164.282 39.6332 164.346 44.7411C164.02 45.5498 163.388 48.0285 162.909 48.8946C161.927 50.7115 160.838 52.4691 159.649 54.1582C159.515 56.3355 159.404 58.4649 159.261 60.5465C159.117 62.628 158.93 64.6282 158.638 66.5566C155.813 69.0927 151.245 72.4136 146.898 76.9595L146.567 77.3088C146.127 77.749 145.686 78.2324 145.25 78.73Z'
                fill='#1C58D9'
            />
            <path
                d='M176.489 64.7573C175.258 64.5516 173.86 64.3218 172.203 64.0778C170.077 63.7668 168.349 63.5515 166.936 63.384C163.546 62.9677 162.148 62.7906 161.53 62.0011C161.143 61.489 161.147 60.7904 161.291 59.7569C161.396 59.0247 161.425 58.4696 161.449 58.0246C161.54 56.3642 161.564 55.9144 164.547 52.3829C165.054 51.78 165.457 51.2489 165.806 50.7847C167.769 48.1959 168.287 47.8035 175 49.1051C179.151 49.909 179.467 50.3014 180.3 52.0288C180.698 52.8925 181.168 53.7215 181.703 54.5075C182.354 55.4645 182.867 56.1106 183.283 56.6321C184.571 58.2591 184.806 58.5462 184.322 62.0058C184.121 63.4414 183.843 64.3984 183.149 64.9296C182.615 65.2688 181.985 65.4266 181.354 65.3794C179.72 65.2844 178.094 65.0765 176.489 64.7573V64.7573ZM174.928 49.5645C168.31 48.282 167.99 48.7079 166.199 51.067C165.845 51.5455 165.442 52.0719 164.925 52.6844C162.052 56.101 162.019 56.5125 161.937 58.0485C161.909 58.527 161.88 59.0678 161.775 59.8239C161.645 60.733 161.631 61.336 161.923 61.7379C162.402 62.3743 163.948 62.5657 167.013 62.9437C168.406 63.1112 170.14 63.3266 172.28 63.6376C173.941 63.8816 175.34 64.1161 176.589 64.3171C180.219 64.9152 182.038 65.2167 182.914 64.5755C183.393 64.2022 183.685 63.4988 183.901 61.9676C184.38 58.7089 184.198 58.5079 182.943 56.948C182.527 56.4168 181.986 55.7613 181.349 54.7947C180.8 53.9893 180.319 53.1393 179.912 52.2537C179.161 50.6985 179.007 50.378 174.942 49.5884L174.985 49.3587L174.928 49.5645Z'
                fill='#1B1D22'
            />
            <path
                d='M178.845 51.5169C179.017 51.8675 179.212 52.2065 179.429 52.5314C179.596 52.785 179.194 53.0099 179.027 52.7706C178.81 52.4445 178.613 52.1057 178.438 51.7561C178.308 51.4834 178.71 51.2489 178.845 51.5169Z'
                fill='#1B1D22'
            />
            <path
                d='M180.133 53.857C180.406 54.2828 180.688 54.7039 180.985 55.1107C181.162 55.3595 180.755 55.5892 180.578 55.3499C180.281 54.9384 179.998 54.5221 179.73 54.0914C179.568 53.8378 179.994 53.6033 180.133 53.857Z'
                fill='#1B1D22'
            />
            <path
                d='M182.163 56.6179C182.377 56.8972 182.612 57.1595 182.867 57.4027C183.087 57.6084 182.757 57.9386 182.536 57.7329C182.283 57.4903 182.048 57.2296 181.832 56.9529C181.65 56.7136 181.981 56.3834 182.163 56.6179Z'
                fill='#1B1D22'
            />
            <path
                d='M183.092 59.7139C183.092 59.4124 183.537 59.4124 183.571 59.7139C183.596 60.0324 183.596 60.3524 183.571 60.6709C183.571 60.9724 183.092 60.9724 183.092 60.6709C183.117 60.3524 183.117 60.0324 183.092 59.7139V59.7139Z'
                fill='#1B1D22'
            />
            <path
                d='M182.68 62.2262C182.728 61.9295 183.159 62.0539 183.13 62.3506C183.063 62.7526 182.996 63.1545 182.924 63.5565C182.876 63.8532 182.445 63.7288 182.474 63.4321L182.68 62.2262Z'
                fill='#1B1D22'
            />
            <path
                d='M179.036 63.0013C179.629 63.1646 180.234 63.2782 180.846 63.341C181.143 63.341 181.148 63.8196 180.846 63.8196C180.198 63.7579 179.558 63.6394 178.931 63.4655C178.869 63.4515 178.816 63.4137 178.782 63.3603C178.748 63.3069 178.737 63.2422 178.751 63.1807C178.765 63.1191 178.803 63.0657 178.856 63.032C178.91 62.9984 178.974 62.9873 179.036 63.0013V63.0013Z'
                fill='#1B1D22'
            />
            <path
                d='M174.463 62.4796C175.06 62.5169 175.655 62.5856 176.245 62.6854C176.541 62.738 176.417 63.1639 176.12 63.1639C175.572 63.0692 175.019 63.0052 174.463 62.9725C174.167 62.9294 174.162 62.4604 174.463 62.4796Z'
                fill='#1B1D22'
            />
            <path
                d='M170.015 61.9678L171.614 62.1687C171.911 62.2022 171.916 62.6473 171.614 62.6473L170.015 62.4511C169.718 62.3985 169.718 61.9295 170.015 61.9678Z'
                fill='#1B1D22'
            />
            <path
                d='M165.6 61.5083L166.97 61.6662C167.267 61.6997 167.267 62.1448 166.97 62.1448L165.6 61.9868C165.308 61.9437 165.303 61.4748 165.6 61.5083Z'
                fill='#1B1D22'
            />
            <path
                d='M163.235 60.4412L163.743 60.9197C163.968 61.1254 163.632 61.4556 163.412 61.2547L162.905 60.7762C162.68 60.5704 163.01 60.2402 163.235 60.4412Z'
                fill='#1B1D22'
            />
            <path
                d='M162.675 57.7233C162.708 57.4267 163.154 57.4219 163.154 57.7233C163.095 58.2539 163.069 58.7877 163.077 59.3216C163.077 59.385 163.052 59.4459 163.007 59.4907C162.962 59.5356 162.901 59.5608 162.838 59.5608C162.774 59.5608 162.713 59.5356 162.668 59.4907C162.623 59.4459 162.598 59.385 162.598 59.3216C162.593 58.7878 162.618 58.2541 162.675 57.7233V57.7233Z'
                fill='#1B1D22'
            />
            <path
                d='M163.685 55.2637L164.164 54.5603C164.331 54.3115 164.738 54.5603 164.571 54.7996C164.403 55.0389 164.26 55.2781 164.092 55.4982C163.924 55.7183 163.517 55.5126 163.685 55.2637Z'
                fill='#1B1D22'
            />
            <path
                d='M175.244 50.268C175.789 50.2952 176.332 50.364 176.867 50.4738C177.164 50.536 177.039 50.9858 176.743 50.9523C176.249 50.8477 175.748 50.7836 175.244 50.7609C174.947 50.7226 174.942 50.2584 175.244 50.268Z'
                fill='#1B1D22'
            />
            <path
                d='M171.691 49.6459C172.21 49.6664 172.726 49.7208 173.238 49.8086C173.534 49.8612 173.41 50.311 173.113 50.2871C172.638 50.2058 172.158 50.1563 171.677 50.1388C171.375 50.1005 171.375 49.6363 171.691 49.6459Z'
                fill='#1B1D22'
            />
            <path
                d='M168.627 49.4593C168.982 49.397 169.343 49.3681 169.704 49.3731C169.767 49.3731 169.828 49.3983 169.873 49.4432C169.918 49.4881 169.943 49.5489 169.943 49.6124C169.943 49.6758 169.918 49.7367 169.873 49.7816C169.828 49.8265 169.767 49.8516 169.704 49.8516C169.383 49.8448 169.063 49.8672 168.746 49.9186C168.454 49.9617 168.33 49.5119 168.627 49.4593Z'
                fill='#1B1D22'
            />
            <path
                d='M166.496 51.7514L167.042 50.9714C167.214 50.7274 167.616 50.9714 167.444 51.2059L166.898 51.9859C166.726 52.2347 166.319 52.0003 166.496 51.7514Z'
                fill='#1B1D22'
            />
            <path
                d='M165.15 53.5458L165.629 52.9237C165.811 52.6844 166.218 52.9237 166.036 53.1582C165.854 53.3926 165.72 53.5745 165.557 53.785C165.394 53.9956 164.987 53.7898 165.15 53.5458Z'
                fill='#1B1D22'
            />
            <path
                d='M184.475 44.1288C186.257 44.6073 186.549 44.2532 186.314 46.6888C186.08 49.1245 186.314 48.8996 184.011 48.4594C182.383 48.1483 182.718 47.6794 182.991 46.1194C183.264 44.5595 183.48 43.8321 184.475 44.1288Z'
                fill='#FFBC1F'
            />
            <path
                d='M164.978 41.5256C166.812 41.7744 167.046 41.3724 167.137 43.8176C167.228 46.2628 166.74 46.0906 165.093 45.88C163.446 45.6695 163.704 45.2771 163.771 43.6932C163.838 42.1093 163.958 41.3868 164.978 41.5256Z'
                fill='#FFBC1F'
            />
            <path
                d='M180.023 25.859C180.023 25.859 178.055 27.0314 178.94 30.515C176.546 26.9596 179.692 22.0644 179.692 22.0644C179.77 22.1683 179.87 22.2527 179.986 22.3109C180.102 22.369 180.23 22.3993 180.36 22.3993C180.49 22.3993 180.618 22.369 180.734 22.3109C180.85 22.2527 180.95 22.1683 181.028 22.0644C183.422 19.6 181.698 18.8105 181.028 19.0976C180.358 19.3847 179.793 19.423 178.414 19.6527C177.035 19.8823 175.675 17.6429 175.675 17.6429L176.029 18.6622C175.392 18.3559 173.999 17.0591 174.032 15.4465C175.297 11.4175 183.073 10.7044 185.969 16.7768C188.866 22.8491 185.969 33.343 194.43 32.118C177.6 39.5398 180.023 25.859 180.023 25.859Z'
                fill='#66320A'
            />
            <path
                d='M146.898 76.926C151.715 83.7162 160.271 91.9466 160.271 91.9466'
                stroke='#1B1D22'
                strokeWidth='0.98'
                strokeMiterlimit='10'
            />
            <path
                d='M173.922 94.8896C182.311 95.2102 194.109 91.6213 194.109 91.6213'
                stroke='#1B1D22'
                strokeWidth='0.98'
                strokeMiterlimit='10'
            />
        </g>
        <defs>
            <clipPath id='clip0'>
                <rect
                    width='234'
                    height='151.412'
                    fill='white'
                />
            </clipPath>
        </defs>
    </svg>
);

export default CreditCardSvg;