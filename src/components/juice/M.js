import * as React from "react";
import { motion } from "framer-motion";

function SvgM(props) {
  return (
    <motion.div 
      initial="initial" animate="fall" variants={props.slideDown}
      className="w-40 relative flex flex-col justify-center items-center z-10 mb-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 128 235"
        {...props}
      >
        <defs>
          <style>{".M_svg__cls-1{opacity:.3}.M_svg__cls-2{fill:#fff}"}</style>
        </defs>
        <g id="M_svg__Layer_2" data-name="Layer 2">
          <g id="M_svg__M">
            <image
              className="M_svg__cls-1"
              width={76}
              height={20}
              transform="translate(26 215)"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAUCAYAAAAnStuxAAAACXBIWXMAAAsSAAALEgHS3X78AAAC40lEQVRYR+2YzW7bRhSFvztDykjln5ow2iCBF0F2Evo6eR2KryM9TmHuiiyMBm7hjmpZcmByOKcLUbIQGKg3XZTx2Qw4Q4KYD/denHtNEq96ubLnNs3MJFFVlT13PnSVZSkzQ89Ekx3umZnNZjObTCa2XC7d4+OjCyHY3d2dAVxeXn77/SB0fX0NwNnZmYqi0NHRUTo/P091XWs2m+kQ3CEw+/Tpk5tOp55t5I2ALM9zD7i2bQcdbXmeC0ht23ZABBogXl1ddfP5PAGCA2BVVTmeQP0AHPfrCMicc5ZSGiQ055xSSuIJ1AOw7tcGiGVZJuhrmJnZfD63uq4ztpB+zLLsp67rzruuO/bej1JK3swGCSylJDPruq5rvPdr7/0yxvjn7ngymXR9XVcG0Bd4zzaajp1zP8cYPwLvvPeFpDFbuIMEBkhS9N5vJIUY45c+oyLQ1HUdJSXoU7KqKlcURR5COAHemtkHM/slpfShfz6RNGLAwMyskXQP3DjnPkv6VdJn4KYoivsQQluWZdrbihCC5Xnu27YdAceSCuAt8F7SGdvoc8/+7v+vJKkB7gAk3bGt4aM8z30IYR8oe2Cnp6d2e3vrRqNRBozM7A0wlnRiZqfAEQMGBjxKSmY2NrM3fUZlm83GXVxc2Gq1AoYL4D/TPsJWq5XG43Fq2zYCjaSvkjbAvSTHwFOSrX247+/8tX+O4/E4rVarvVndAyuKQiGErn9xbWZB0g2Ama2+p6Lf330NNG3bdj0b4Mm4WlVVOVsPVjjn3qeUPgLvzGxvK4bqw7SFEM1sIykAX5xzv6WUfgcC8FCWZQtoZ1yZz+ddXdcNsE4p/ZFlmbqu+2tnXCV5hh1hzxnXNdD0xhVJ7IyrqqratQYPADHGCPztnBtJ+i5aI+dclNTEGA9bo1jXtbRLRb0238DLm+/DeZgWi0WaTqeaTCbdcrlsX8c7tRaLhehhwTfzsP3m6wDxZQPEV/27/gGF3QMu/fHjcQAAAABJRU5ErkJggg=="
            />
            <path className="M_svg__cls-2" d="M32.64 221.94h62.71v6.42H32.64z" />
            <image
              className="M_svg__cls-1"
              width={43}
              height={62}
              transform="translate(65)"
              xlinkHref="data:image/png;base64,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"
            />
            <path
              className="M_svg__cls-2"
              transform="rotate(-64.95 86.641 31.146)"
              d="M62.2 26.12h48.9v10.03H62.2z"
            />
            <image
              className="M_svg__cls-1"
              width={122}
              height={156}
              transform="translate(3 72)"
              xlinkHref="data:image/png;base64,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"
            />
            <path
              className="M_svg__cls-2"
              d="M118.09 78.65l-3.99 28.62-8.46 60.6-7.55 54.07H29.91l-7.55-54.07-8.46-60.6-3.99-28.62h108.18z"
            />
            <image
              className="M_svg__cls-1"
              width={122}
              height={57}
              transform="translate(3 17)"
              xlinkHref="data:image/png;base64,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"    
            />
            <path
              className="M_svg__cls-2"
              d="M118.09 67.6H9.91l.22-4.78a54.77 54.77 0 0152.41-38.89h2.92a54.77 54.77 0 0152.41 38.89z"
            />
            <path
              className={`fill-${props.flavor} transition-all duration-300`}
              d="M114.1 107.27H13.9l8.46 60.6h83.28l8.46-60.6z"
            />
            <g>
              <image
                className="M_svg__cls-1"
                width={128}
                height={24}
                transform="translate(0 61)"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAYCAYAAAAyC/XlAAAACXBIWXMAAAsSAAALEgHS3X78AAADd0lEQVRoQ+2azW7bRhRGzx2SEtzYcsxFGyTwIshOQl/HryPxdaTHKcxdkYXRwC1QqpJlGxKH92bBES0bSpFlGM8BCEGkCC2+b2bun5gZkddLeuymiIiZURSFHHse6RfT6dREBDuy2uXwnojIbDaT8Xgsy+XSbbdbV1WVrFYrAbi8vHz5fuQH5ObmBoDz83PL89yGw6FeXFxoWZY2m83s0AiHBpCrqys3mUwS2p1hAKRZliWAq+s67gY9IssyA7Su6wbwwA7w19fXzXw+V8DgwABFUTiehP8FOA2fAyB1zomqRhP0AOecqarxJPwDsAmfO8BPp1OFEAOIiMzncynLMqUV/W2apr82TXPRNM1pkiQDVU1EJBqgB6iqiUjTNM0uSZJNkiRL7/0/+8fj8bgJcZ6lACHgS2hX+6lz7jfv/SfgfZIkuZm9oTVLNEA/MDPzSZLcm1nlvf8SdnAP7Mqy9GamEI6AoihcnudZVVVnwDsR+Sgiv6vqx/D9zMwGRAP0BRORnZndAbfOuc9m9oeZfQZu8zy/q6qqnk6n2qWBVVVJlmVJXdcD4NTMcuAd8MHMzml3B3f07yI/GmpmO2AFYGYr2phukGVZUlVVt5A7A4xGI3l8fHRAamZD4A1wBpyLyFtgSDRAX1BgGwL8dTjCh7R6u9FoJOv1GnhRCAqpnnPOOVVNgYx25Q+DKaIB+oGGeH1Aq2EaNHV1XcvJyUn3w6OVQDOTECU6WtEPr0g/6DQLWh6N36Kgr5xv9QL2hQR9cUX6wTPdzMycc4cV4I5nBsiyzOq6VlVV2ipSTVs52oYzJe4Y/UCBLa12NeCDphpKxB2dAdbrtWVZpoAXkS1wH/LIVXBOTAP7g9KKvwLuROSeNivwgK7X684EnQHyPLeqqprw4kZEKjO7BRCRdSwE9YpnhaCg5QbY1XXdBK2Bp2aQFEWR0fYBcufcB1X9BLwXka4UHHsB/SAc9l5E7s2sAr445/5U1b+ACniYTqc1YPtmEPP5vCnLcgdsVPXvNE2taZp/980gM0uIO0Bf+FYzaAPsQjMIM2PfDLKiKPbtwwcA770H/nPODcwstoN7xL4d7JzzZrbz3h+2g31ZlrZPCeJAyE/K9w6EHKaBtlgsdDKZ2Hg8bpbLZR1HwvrJ/42ELRYLI4gPL2YCu5sSh0J/Jr57KDTy+vgKrAxAGiMemjsAAAAASUVORK5CYII="
              />
              <path className="M_svg__cls-2" d="M6.74 67.6h114.51v11.05H6.74z" />
            </g>
            <g>
              <image
                className="M_svg__cls-1"
                width={34}
                height={35}
                transform="translate(47 180)"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAYAAADxG9hnAAAACXBIWXMAAAsSAAALEgHS3X78AAADuElEQVRYR82YfVMTSRCHnwmQBRQPoiW+lVqe3/8rqaUnJ2cVECEhgWT949e90ztZyOYs666rumbZzPQ809PT00uq65r/g2yv63CXpJRS+a7+hVWlTcba5F0KsATqoBuBrQUJKx+YbhXqvy+CLq2t7Xkt1L0gBuGTbwM7QAUMQztAk90Ac2v9+dZ0ASzvg+kECVswQJMPgT3gAfDQ2n17t4UmmgHXwNT0Kjw74BI5Z2XSlWANEFtkgEfAoenI2kfAgdlYoImvgEtgDJwDF6ZjMtAipbSyVV2nxiEqtPIj4CnwDDi2doRAHpiNJZpoAvxAEKemf1t7hkBn5PhppAUSYmKIJnkCvARem75AUIf2+y6CXqLVztBkY+Af4AQBez8QwCyl1NqiBiRA7KD9P0IQ74A/gbfIIyMUJ7vW10/NLYoDhxkBf6Ct9Xn8RC2BOqXUBHC5NR4XB2jlrxHEe+AV8Nh+qxDEAIF47lgioAPksT3rh72/Rp6bk6GANsjA/t5DK3mGQN4giGPk5sr6OYSLu3knqNu/QTE0RjE0sXeed9QxnJQI8hR4joAeIwh3c8yoLim0nvxAnpii0+MBfI5g5smCxTtDjg8HeWJ6hGLCPdEFESUuqkJjj8j2PG58ayE8xNxRkXPHQ3vuC+FSwuwhW+7Vinw9JAhEZJduo4DdJafx1qCeUibGCtkc0hFjJYjD+N2yFQZsAuHS22YEKQe6/lsIl142S5D/TEqQmJiaDEhxL2wovWxGkDhgQagjugb2lN42SxBP0XOUjmfkdLwpjPdfkC9ET/G3ZBggg8RBM3I6vkQZcNY1+B6Ji5ohG16nTGmXAiuXnpd7no6/o6t8RK47PEmV90yUCDFFd8sZsvUd2Z6SKzbAQOq6rlNKNav3gtcTFZq4Jl//XTAOcYO24YJcl5yYTQe5hVw2lh5xkHMb6HfMgFxveKFTeiZ64ppcHH0FPgKfzOY5GaSzDIAcWD8Q/RBN5IATdHE5YPyciDF2ibbhBPgMfEAgp2bbD0AjDYhtT4yTM9oQF2g1x6hU9JLAA7706DfgC/CX6Tez2cRHZ6kILZi5vyLvt1fmpwhkn/ZV7ouYhH4n5CAd229zOr5xyq2BtotjXvHo/4pOUSwNfJwf1ysEc2bjLtFimm8bCrnzSy8U014WVMgL++SatStGvICekHNQk8Tu+trr88kZgbwWjd+9EcRhHOiGkAjvgoA1IE2nNlC8xrvyiGtzwd0H4NILxCX8Z2BdfVIDa/8DEGUjkN8pPwG/YsUUFFJQMAAAAABJRU5ErkJggg=="
              />
              <circle cx={64} cy={197.87} r={10.91} fill="#231f20" />
            </g>
            <text
              transform="translate(58.27 201.85)"
              fontSize={12}
              fontFamily="Montserrat-Bold,Montserrat"
              fontWeight={700}
              fill="#fff"
            >
              {"M"}
            </text>
          </g>
        </g>
      </svg>
      <div className="w-24 h-8 px-1 mt-8 absolute rounded-lg shadow-md bg-white bg-opacity-50 flex items-center justify-center">
        <p className="whitespace-nowrap overflow-hidden overflow-ellipsis text-center text-xs font-bold">{props.name}</p>
      </div>
    </motion.div>
  );
}

export default SvgM;