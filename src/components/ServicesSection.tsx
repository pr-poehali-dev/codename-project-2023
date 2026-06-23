import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, CalendarClock, MapPin, ShieldCheck, Headphones, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Wallet,
    title: "Ежедневные выплаты",
    description:
      "Получайте деньги каждый день — на карту или наличными. Заработок начисляется сразу после смены, без задержек и недельных ожиданий. Сколько отработали — столько и получили.",
  },
  {
    icon: CalendarClock,
    title: "Свободный график",
    description:
      "Выходите на смену тогда, когда удобно вам: утром, днём или вечером. Совмещайте с учёбой или другой работой. Минимум 4 часа в день — остальное решаете сами.",
  },
  {
    icon: MapPin,
    title: "Зона рядом с домом",
    description:
      "Работайте в удобном районе Москвы рядом с домом или метро. Мы подбираем зону доставки так, чтобы вы тратили меньше времени на дорогу и больше зарабатывали.",
  },
  {
    icon: ShieldCheck,
    title: "Официальное оформление",
    description:
      "Работаем по договору, помогаем с самозанятостью. Прозрачные условия, никаких скрытых вычетов и штрафов. Подходит гражданам РФ и СНГ с документами.",
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    description:
      "Куратор всегда на связи и поможет с любым вопросом на маршруте. Если что-то пошло не так с заказом — мы быстро решаем проблему, чтобы вы не теряли время и деньги.",
  },
  {
    icon: TrendingUp,
    title: "Бонусы и рост дохода",
    description:
      "Доплаты за активные часы, плохую погоду и большое количество заказов. Чем дольше работаете — тем выше ставка и приоритет на выгодные заказы.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Условия работы
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Почему курьеры <span className="text-primary">выбирают нас</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Честные выплаты, удобный график и поддержка на каждом шаге — мы создаём условия, в которых хочется работать и зарабатывать.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}