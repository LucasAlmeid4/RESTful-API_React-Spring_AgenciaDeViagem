import CardPromocoes from "./CardPromocoes/CardPromocoes";

function Section_promocoes({titulo}) {
    return(
        <section className="text-center">
        
        <h2 className="mt-3 p-3">{titulo}</h2>
        <hr/>
        <div className="row opcoes-de-destinos">
            <CardPromocoes foto={'https://cdn.pixabay.com/photo/2015/09/07/19/12/hotel-928937_960_720.jpg'}
                           nome={'Recife'}
                           precoAnterior={'2.500,00'}
                           preco={'2.100,00'}
                        ></CardPromocoes>

            <CardPromocoes foto={"https://cdn.pixabay.com/photo/2015/03/18/21/17/bora-bora-680010_960_720.jpg"}
                           nome={"Natal"}
                           precoAnterior={'900,00'}
                           preco={'700,00'}
                ></CardPromocoes>

          

          <CardPromocoes foto={'https://cdn.pixabay.com/photo/2015/11/19/16/27/casino-1051381_960_720.jpg'}
                         nome={'Miami'} 
                         precoAnterior={'3.000,00'}
                         preco={'2.354,00'}
                ></CardPromocoes>

          <CardPromocoes foto={'https://cdn.pixabay.com/photo/2020/05/18/08/05/new-york-5185104_960_720.jpg'}
                         nome={'Gotham City'}
                         precoAnterior={'60,00'}
                         preco={'2,00'}
                ></CardPromocoes>

          <CardPromocoes foto={'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg'}
                         nome={'Acapulco'}
                         precoAnterior={'1.900,00'}
                         preco={'1.112,00'}
                ></CardPromocoes>

          <CardPromocoes foto={'https://cdn.pixabay.com/photo/2020/02/20/03/50/palace-4863835_960_720.jpg'}
                         nome={'Emirados arabes'}
                         precoAnterior={'6.000,00'}
                         preco={'4.200,00'}
                ></CardPromocoes>

          <CardPromocoes foto={'https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_960_720.jpg'}
                         nome={'Conforto'}
                         precoAnterior={'3.420,00'}
                         preco={'1.500,00'}
            
                ></CardPromocoes>
          <CardPromocoes foto={'https://cdn.pixabay.com/photo/2016/11/14/05/29/children-1822704_960_720.jpg'}
                         nome={'Diversão'}
                         precoAnterior={'1.682,00'}
                         preco={'1.283,00'}
                ></CardPromocoes>
        </div>
    </section>
    
    )
}

export default Section_promocoes