import CardPromocoes from "../Section_Promocoes/CardPromocoes/CardPromocoes"

function Section_Destinos
({titulo}) {
    return(
        <section className="text-center">
        
        <div className="row opcoes-de-destinos">
        <CardPromocoes foto={'https://cdn.pixabay.com/photo/2015/09/07/19/12/hotel-928937_960_720.jpg'}
                nome={'Recife'} 
                precoAnterior={'650,00'}
                preco={'500,20'}
                
                        ></CardPromocoes>

            <CardPromocoes foto={"https://cdn.pixabay.com/photo/2015/03/18/21/17/bora-bora-680010_960_720.jpg"}
                nome={"Natal"}
                precoAnterior={'500,00'}
                preco={'499,99'}
                ></CardPromocoes>

          

          <CardPromocoes foto={'https://cdn.pixabay.com/photo/2015/11/19/16/27/casino-1051381_960_720.jpg'}
                nome={'Miami'}
                precoAnterior={'3.650,00'}
                preco={'2.999,99'}
                ></CardPromocoes>

          <CardPromocoes foto={'https://cdn.pixabay.com/photo/2020/05/18/08/05/new-york-5185104_960_720.jpg'}
                nome={'Gotham City'}
                precoAnterior={'00,00'}
                preco={'00,00'}
                ></CardPromocoes>

          <CardPromocoes foto={'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg'}
                nome={'Acapulco'}
                precoAnterior={'1.250,00'}
                preco={'999,99'}
                ></CardPromocoes>

          <CardPromocoes foto={'https://cdn.pixabay.com/photo/2020/02/20/03/50/palace-4863835_960_720.jpg'}
                nome={'Emirados arabes'}
                precoAnterior={'650,00'}
                preco={'500,20'}
                ></CardPromocoes>

          <CardPromocoes foto={'https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_960_720.jpg'}
                nome={'Conforto'}
                precoAnterior={'650,00'}
                preco={'500,20'}
            
                ></CardPromocoes>
          <CardPromocoes foto={'https://cdn.pixabay.com/photo/2016/11/14/05/29/children-1822704_960_720.jpg'}
                nome={'Diversão'}
                precoAnterior={'650,00'}
                preco={'500,20'}
                ></CardPromocoes >
        </div>
    </section>
    
    )
}

export default Section_Destinos
