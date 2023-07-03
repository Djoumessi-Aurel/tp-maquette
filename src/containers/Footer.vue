<template>
<footer class="my-footer">
    <div class="flex justify-between items-center w-full footer-content">
        <div class="news-letter">
            <p>Abonnieren Sie unseren Newsletter</p>
            <div class="news-form">
                <input class="pl-1" type="text" placeholder="Email*" autocomplete="off">
                <button><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
        <p>Mentions légales</p>
        <p>Formulaire de contact</p>
        <p>FAQ</p>
        <p>2021 Comii. Tout droit réservé.</p>
    </div>
</footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss">
.my-footer{
    min-height: 95px;
    width: 100%;
    display: flex;
    place-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    /* UI Properties */
    background: #25262B 0% 0% no-repeat padding-box;
    opacity: 1;
    font: normal normal 300 20px/24px Sofia Pro;
    letter-spacing: 0px;
    color: #B5B5B5;
    .footer-content{
        flex-basis: 100%;
        display: flex;
        justify-content: space-around;
    place-items: center;
        font-size: 1.03rem;
        p, .news-form{
            min-width: 60px;
            margin-top: 5px;
            margin-bottom: 5px;
        }
        .news-letter{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .news-form{
                min-width: 220px;
                input {
                    background: #333437 0% 0% no-repeat padding-box;
                    height: 30px;
                    color: inherit;
                    border:none;
                    outline: none;
                }
                button{
                    width: 30px;
                    height: 30px;
                    background: #78589F 0% 0% no-repeat padding-box;
                    color: inherit;
                    border:none;
                }
            }
        }
    }
}

@media screen and (max-width:900px){
    .footer-content p{
        text-align: center;
    }
    .news-letter{
        place-items: center;
    }
}

@media screen and (max-width:600px){
    .footer-content{
        flex-direction: column;
        justify-content:flex-start;
    }
}
</style>