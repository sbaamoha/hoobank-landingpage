import { star, shield, send} from "../assets"

const Handlemoney = () => {
  return (
    <section className="flex flex-col md:flex-row  md:py-28 justify-between gap-10 text-center md:text-start">
        <div className="flex-1 gap-5">
            <h3 className="text-5xl font-poppins">You do the business, we’ll handle the money.</h3>
            <p className="text-dimWhite py-10 max-w-[500px]">
            With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
            </p>
            <button className=" bg-blue-gradient text-black rounded px-10 py-2">Get Started</button>
        </div>
        <div className="flex-1 flex flex-col">
            <div className="flex gap-8 items-center p-8 pt-0">
                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.4696 19.7122C25.0552 20.1138 24.8648 20.6946 24.9592 21.2642L26.3816 29.1362C26.5016 29.8034 26.22 30.4786 25.6616 30.8642C25.1144 31.2642 24.3864 31.3122 23.7896 30.9922L16.7032 27.2962C16.4568 27.165 16.1832 27.0946 15.9032 27.0866H15.4696C15.3192 27.109 15.172 27.157 15.0376 27.2306L7.94959 30.9442C7.59919 31.1202 7.20239 31.1826 6.81359 31.1202C5.86639 30.941 5.23439 30.0386 5.38959 29.0866L6.81359 21.2146C6.90799 20.6402 6.71759 20.0562 6.30319 19.6482L0.525591 14.0482C0.042391 13.5794 -0.125609 12.8754 0.095191 12.2402C0.309591 11.6066 0.856791 11.1442 1.51759 11.0402L9.46959 9.88663C10.0744 9.82423 10.6056 9.45623 10.8776 8.91223L14.3816 1.72823C14.4648 1.56823 14.572 1.42103 14.7016 1.29623L14.8456 1.18423C14.9208 1.10103 15.0072 1.03223 15.1032 0.976232L15.2776 0.912232L15.5496 0.800232H16.2232C16.8248 0.862632 17.3544 1.22263 17.6312 1.76023L21.1816 8.91223C21.4376 9.43543 21.9352 9.79863 22.5096 9.88663L30.4616 11.0402C31.1336 11.1362 31.6952 11.6002 31.9176 12.2402C32.1272 12.8818 31.9464 13.5858 31.4536 14.0482L25.4696 19.7122Z" fill="#00F6FF"/>
                </svg>
                <div>
                    <h2 className="font-poppins text-2xl">Rewards</h2>
                    <p className="text-dimWhite font-poppins max-w-[350px]">
                    The best credit cards offer some tantalizing combinations of promotions and prizes
                    </p>
                </div>
            </div>
            <div className="flex gap-8 items-center bg-black-gradient p-8 rounded-3xl">
                <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5649 31.8619C13.7421 31.9544 13.9402 32.0015 14.1384 31.9999C14.3365 31.9984 14.533 31.9497 14.7118 31.8556L20.4204 28.8039C22.0392 27.941 23.3069 26.9761 24.2959 25.8527C26.4463 23.4051 27.6206 20.2813 27.5997 17.0602L27.532 6.43517C27.5256 5.21138 26.7218 4.11938 25.533 3.72243L14.9131 0.159303C14.2737 -0.0572148 13.573 -0.0525079 12.9448 0.170286L2.36516 3.8605C1.18284 4.27314 0.393559 5.37298 0.400003 6.59834L0.467655 17.2155C0.488595 20.4413 1.70312 23.551 3.88895 25.9735C4.88764 27.0812 6.1666 28.032 7.80315 28.8808L13.5649 31.8619ZM12.0537 19.3743C12.2921 19.6034 12.6014 19.7163 12.9106 19.7132C13.2199 19.7116 13.5276 19.5955 13.7627 19.3633L20.0013 13.213C20.47 12.7501 20.4652 12.0064 19.9916 11.5498C19.5164 11.0933 18.7513 11.0964 18.2826 11.5593L12.8929 16.8718L10.6861 14.7505C10.211 14.294 9.44745 14.2987 8.9771 14.7615C8.50837 15.2244 8.5132 15.9681 8.98838 16.4246L12.0537 19.3743Z" fill="#00F6FF"/>
                </svg>
                <div>
                    <h2 className="font-poppins text-2xl">100% Secured</h2>
                    <p className="text-dimWhite font-poppins max-w-[350px]">
                        The best credit cards offer some tantalizing combinations of promotions and prizes
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-8 p-8">
                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.4966 0.931172C30.6963 0.109757 29.5118 -0.196261 28.4074 0.125863L2.65282 7.61524C1.48754 7.93897 0.661604 8.8683 0.439113 10.0489C0.21182 11.2504 1.00574 12.7757 2.04297 13.4135L10.0959 18.3629C10.9218 18.8702 11.9878 18.743 12.6713 18.0537L21.8927 8.77488C22.3569 8.2917 23.1252 8.2917 23.5894 8.77488C24.0536 9.24196 24.0536 9.99895 23.5894 10.4821L14.352 19.7625C13.6669 20.4503 13.5389 21.5213 14.0431 22.3524L18.9635 30.486C19.5397 31.4524 20.5321 32 21.6206 32C21.7486 32 21.8927 32 22.0207 31.9839C23.2693 31.8228 24.2617 30.9692 24.6298 29.7612L32.2649 4.03967C32.6011 2.94445 32.297 1.75259 31.4966 0.931172" fill="#00F6FF"/>
                </svg>
                <div>
                    <h2 className="font-poppins text-2xl">Balance Transfer</h2>
                    <p className="text-dimWhite font-poppins max-w-[350px]">
                    A balance transfer credit card can save you a lot of money in interest charges.                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Handlemoney