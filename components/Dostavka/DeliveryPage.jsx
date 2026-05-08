import React from 'react'
import Link from 'next/link'

export default function DeliveryPage() {
  return (
    <>
      {/* Hero Banner */}
      <div
        className='h-[293px] md:mt-[44px] max-md:h-[212px] max-md:px-4'
        style={{
          backgroundImage: 'linear-gradient(360deg, #272727 0%, rgba(39, 39, 39, 0) 100%), url(/dotavka.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='pt-[128px] max-w-[1340px] m-auto max-md:pt-20 px-6'>
          <span className='font-normal flex text-[18px] leading-[120%] tracking-[-0.04em]'>
            <Link href='/' className='text-[#FFFFFF66]'>Главная &nbsp;-</Link>
            <p className='text-[#FFF] font-semibold'>&nbsp;&nbsp;Доставка и оплата</p>
          </span>
          <h1 className='font-normal text-[64px] leading-[100%] tracking-[-0.04em] mt-[32px] text-[#FFF] max-md:text-[32px] max-md:mt-6'>
            Доставка и оплата
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className='max-w-[1340px] mx-auto px-6 py-16'>

        {/* ===== Способы оплаты ===== */}
        <div className='grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 mb-16'>
          <h2 className='text-2xl font-semibold text-[#272727]'>Способы оплаты</h2>
          <div className='text-[#272727]'>
            <p className='text-base mb-6'>
              Мы предлагаем несколько удобных способов оплаты, чтобы вы могли выбрать наиболее подходящий:
            </p>

            <h3 className='text-base font-medium mb-1'>Банковская карта (Visa, MasterCard, МИР)</h3>
            <p className='text-sm text-gray-500 mb-5'>
              Оплата возможна непосредственно на сайте через защищённый платежный шлюз. Все данные надежно зашифрованы и не передаются третьим лицам.
            </p>

            <h3 className='text-base font-medium mb-1'>Безналичный расчет для юридических лиц</h3>
            <p className='text-sm text-gray-500 mb-5'>
              После оформления заказа вы получите счёт для оплаты по реквизитам. Мы предоставляем полный комплект бухгалтерских документов.
            </p>

            <h3 className='text-base font-medium mb-1'>Оплата по счету-фактуре</h3>
            <p className='text-sm text-gray-500 mb-5'>
              Актуально для оптовых клиентов и организаций. Счет формируется менеджером и направляется на ваш e-mail.
            </p>

            <h3 className='text-base font-medium mb-1'>Оплата при самовывозе</h3>
            <p className='text-sm text-gray-500 mb-5'>
              Вы можете оплатить заказ наличными или переводом по СБП в нашем пункте самовывоза по адресу: г. Санкт-Петербург, ул.
            </p>

            <p className='text-base mt-4'>
              Если у вас возникли вопросы по оплате или требуется индивидуальное коммерческое предложение, наши менеджеры всегда готовы проконсультировать вас.
            </p>
          </div>
        </div>

        <div className='border-t border-gray-100 mb-16' />

        {/* ===== Способы доставки ===== */}
        <div className='grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 mb-16'>
          <h2 className='text-2xl font-semibold text-[#272727]'>Способы оплаты</h2>
          <div className='text-[#272727]'>
            <h3 className='text-base font-medium mb-2'>Способы доставки:</h3>

            <p className='text-base font-medium mb-1'>Курьерская доставка по городу</p>
            <p className='text-sm text-gray-500 mb-5'>
              Оперативная доставка до двери в пределах города. Стоимость и сроки уточняются при оформлении заказа.
            </p>

            <p className='text-base font-medium mb-1'>Доставка транспортными компаниями (ПЭК, СДЭК, Деловые Линии и др.)</p>
            <p className='text-sm text-gray-500 mb-5'>
              Отгрузка производится в течение 1–2 рабочих дней после подтверждения оплаты.
            </p>

            <p className='text-base font-medium mb-1'>Самовывоз со склада</p>
            <p className='text-sm text-gray-500 mb-8'>
              Вы можете самостоятельно забрать заказ с нашего склада в будние дни. Пожалуйста, согласуйте время приезда с менеджером заранее.
            </p>

            <h3 className='text-base font-medium mb-3'>Дополнительная информация:</h3>
            <div className='text-sm text-gray-500 flex flex-col gap-2 mb-8'>
              <p>1. Все товары перед отправкой проходят проверку на целостность и комплектацию;</p>
              <p>2. Мы тщательно упаковываем продукцию, чтобы исключить повреждения при транспортировке;</p>
              <p>3. В случае обнаружения повреждений при получении — обязательно составьте акт осмотра с представителем транспортной компании и свяжитесь с нами;</p>
              <p>4. Вы можете отслеживать статус своего заказа по трек-номеру, предоставленному после отправки.</p>
            </div>

            <p className='text-base'>
              Если у вас возникли вопросы по оплате или требуется индивидуальное коммерческое предложение, наши менеджеры всегда готовы проконсультировать вас.
            </p>
          </div>
        </div>

        <div className='border-t border-gray-100 mb-16' />

        {/* ===== Возврат ===== */}
        <div className='grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 mb-16'>
          <h2 className='text-2xl font-semibold text-[#272727]'>Возврат</h2>
          <div className='text-[#272727]'>
            <p className='text-base mb-6'>
              Если по какой-либо причине приобретённый товар не соответствует вашим ожиданиям или имеет производственный дефект, вы имеете возможность оформить его возврат в соответствии с действующим законодательством РФ.
            </p>

            <h3 className='text-base font-medium mb-3'>Условия возврата товара надлежащего качества:</h3>
            <p className='text-sm text-gray-500 mb-3'>
              Вы можете вернуть товар надлежащего качества в течение 14 календарных дней с момента получения, если:
            </p>
            <div className='text-sm text-gray-500 flex flex-col gap-2 mb-5'>
              <p>1. Товар не был в употреблении;</p>
              <p>2. Сохранены его потребительские свойства, товарный вид, заводская упаковка, пломбы и ярлыки;</p>
              <p>3. Имеется документ, подтверждающий факт и условия покупки (чек, товарная накладная, договор и пр.);</p>
              <p>4. Товар не входит в перечень непродовольственных товаров, не подлежащих возврату согласно Постановлению Правительства РФ № 2463 от 31.12.2020.</p>
            </div>

            <p className='text-sm text-gray-500 mb-8'>
              <strong className='text-[#272727]'>Важно:</strong> Возврату не подлежат отрезные изделия (например, греющий кабель, проданный на метраж), а также продукция, изготовленная по индивидуальному заказу.
            </p>

            <h3 className='text-base font-medium mb-3'>Возврат товара с дефектами или браком:</h3>
            <p className='text-sm text-gray-500 mb-8'>
              Если вы обнаружили производственный дефект, вы можете вернуть товар или потребовать его замену в течение гарантийного срока, установленного производителем. Гарантийный срок указан в паспорте изделия и/или в гарантийном талоне.
            </p>

            <h3 className='text-base font-medium mb-3'>Порядок возврата денежных средств:</h3>
            <p className='text-sm text-gray-500 mb-2'>Возврат денежных средств осуществляется:</p>
            <div className='text-sm text-gray-500 flex flex-col gap-2 mb-5'>
              <p>1. На банковскую карту, с которой была произведена оплата;</p>
              <p>2. Наличными при оплате в офисе/складе;</p>
              <p>3. Или иным способом, согласованным с клиентом.</p>
            </div>
            <p className='text-sm text-gray-500 mb-5'>
              Срок возврата денежных средств составляет до 10 рабочих дней с момента принятия положительного решения по заявлению на возврат.
            </p>

            <p className='text-sm text-gray-500 font-medium mb-2'>Доставка при возврате:</p>
            <div className='text-sm text-gray-500 flex flex-col gap-2'>
              <p>1. При возврате товара надлежащего качества доставка осуществляется за счёт покупателя.</p>
              <p>2. В случае возврата товара с заводским браком или ошибочной комплектацией — все расходы по пересылке берёт на себя компания Genius Electro.</p>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-100 mb-16' />

        {/* ===== Контакты для связи ===== */}
        <div className='grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12'>
          <div />
          <div>
            <h2 className='text-2xl font-semibold text-[#272727] mb-4'>Контакты для связи</h2>
            <p className='text-sm text-gray-500 mb-8'>
              Если у вас возникли вопросы по возврату товара, вы всегда можете обратиться в нашу службу поддержки
            </p>
            <div className='grid grid-cols-3 gap-8'>
              <div>
                <p className='text-sm text-gray-400 mb-2'>Телефон</p>
                <a href='tel:+79211118923' className='text-base text-[#272727] hover:opacity-70 transition cursor-pointer'>
                  +7 (921) 111-89-23
                </a>
              </div>
              <div>
                <p className='text-sm text-gray-400 mb-2'>E-mail</p>
                <a href='mailto:info@geniuselectro.ru' className='text-base text-[#272727] hover:opacity-70 transition cursor-pointer'>
                  info@geniuselectro.ru
                </a>
              </div>
              <div>
                <p className='text-sm text-gray-400 mb-2'>Режим работы</p>
                <p className='text-base text-[#272727]'>Пн–Пт с 9:00 до 18:00 (МСК)</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
