import Button from "./Button.jsx";

const BannerInformation = () => {

    return (
        <section className={'banner__section'}>
            <div className={'banner__wrapper'}>
            <h1 className={'banner__h1'}>
                Make it awesome.
            </h1>
            <h3 className={'banner__h3'}>
                Al trained to generate realistic 3D objects.
            </h3>
            <Button bgColor={'#3D5CFF'} bgColorHover={'#2f4ef1'} name={'Get started'} />
            </div>
        </section>
    );
}

export default BannerInformation